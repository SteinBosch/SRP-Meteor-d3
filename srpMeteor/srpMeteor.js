// Define the mongo db collection
scores = new Mongo.Collection("scores");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
  	scores: function () {
  		return scores.find({});
  	}
  });
  Template.body.events({
  	"submit .new-score": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var score = event.target.score.value;

      // Insert a score into the collection
      scores.insert({
      	score: score,
        createdAt: new Date() // current time
      });
      // Clear form
      event.target.score.value = "";
      // After insert run chart function
      Template.chart.rendered();
    },
    "click .scoreButton": function (event) {
      event.preventDefault();
      // Getting button val
      var score = $(event.target).attr("data-val");

      // Insert button value
      scores.insert({
        score: score,
        createdAt: new Date()
      });
      // Run chart function after insert
      Template.chart.rendered();
    },
    "click .resetScores": function (event) {
      event.preventDefault();
      // Reset scores
      // call meteor method to remove score
      Meteor.call("removeAllScores");
      // empty the chart and legend
      $("#fullLegend").html("");
      $("#chart").html("");
    },
  });


  Template.chart.rendered = function(){
    //Empty the chart before rendering
    $("#fullLegend").html("");
    $("#chart").html("");

    // define sets to extract values
    var dataset = [],
    counts = {},
    data = scores.find().fetch();
    // First count how many times a value exists
    jQuery.each(data, function(key,value) {
      if (!counts.hasOwnProperty(value.score)) {
        counts[value.score] = 1;
      } else {
        counts[value.score]++;
      }
    });
    // Now convert the counts in a workable d3 dataset
    jQuery.each(counts, function(key,value) {
      var tempObj = {"cijfer": key, "count": value };
      dataset.push(tempObj);
    });

    // define all needed values for the d3 chart
    var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    donutWidth = 75,
    legendRectSize = 18,                              
    legendSpacing = 4,
    color = d3.scale.category20(); 

    var svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius);

    var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);


    var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) { 
      return color(d.data.cijfer);
    });

    var legend = d3.select('#legend')            
    .data(color.domain())                          
    .enter()                                       
    .append('div')                                   
    .attr('class', 'legend');                                            

    legend.append('span')                            
    .style('width', legendRectSize)                 
    .style('height', legendRectSize)                
    .style('background-color', color)                          
    .style('stroke', color);                       

    legend.append('span')                                
    .text(function(d) { return d; });
    console.log(legend);
    $("#fullLegend").append(legend[0]);

  }
}

//Meteor on the server
if (Meteor.isServer) {
  // Do action on startup
  Meteor.startup(function() {
    return Meteor.methods({
      // I want to remove all scores
      removeAllScores: function() {
        // Al' scores are now removed when this method is called
        return scores.remove({});
      }
    });
  });
}