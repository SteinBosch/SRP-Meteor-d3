# SRP Meteor.js in combinatie d3.js

Een nieuwe uitdaging is altijd leuk!

Ik had nog nooit gewerkt met Meteor.js maar wel genoeg over gehoord.
Live-reload, elementen toevoegen of verwijderen zonder dat je pagina refresht. Ideaal als je bijvoorbeeld een spelshow host of een app  die op meerdere devices runt en informatie zou willen toevoegen.

Ik ben dus de uitdaging aangegaan om Meteor.js te combineren met d3.js. D3 is een javascript library waar je grafieken kunt maken.

Het idee achter mijn kleine applicatie is dat je cijfers van studenten zou kunnen invoeren en bij elk ingevoerde cijfer de grafiek zich aanpast.

Ik heb gekozen voor een donutpie, ik had met deze variant van d3 nog geen ervaring dus het leek mij leuk om hier wat over te leren.

Packages zijn scripts die gemakkelijk via de terminal kunnen worden toegevoegd aan de app waardoor je geen scripts hoeft in te laden in de html.

De packages die ik heb toegevoegd aan meteor zijn:
- d3.js
- nvd3.js

## Hoe ben ik te werk gegaan?
Eerst heb Meteor helemaal onderzocht.
Ik heb de simple-todo app tutorial van de meteor site gevolgd.
Ik heb mijn simple-todo app ook mee geupload op deze git. Het was vrij pittig om te begrijpen wat er gebeurt en Meteor heeft een stijle leercurve. Maar ik kan nu wel zeggen dat ik begrijp wat er gebeurt en het is echt erg gaaf.

Daarna ben ik van scratch mijn eigen d3 combi gaan opbouwen. Koste zeker wat tijd maar volgens mij is het goed gelukt!
Ik ben tevreden in ieder geval.

Deployment on meteor.com
http://srpmeteord3.meteor.com/

## Bronnen
- https://www.meteor.com/install
- https://www.meteor.com/tutorials/blaze/creating-an-app
- https://atmospherejs.com/
- https://teamgaslight.com/blog/how-to-remove-all-elements-from-a-meteor-collection
- http://blog.benmcmahen.com/post/41124327100/using-d3-and-meteor-to-generate-scalable-vector
- http://docs.mongodb.org/manual/reference/method/db.collection.find/
- http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
