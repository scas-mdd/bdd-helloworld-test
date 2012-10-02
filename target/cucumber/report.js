$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('bdd\helloworld\helloworld.feature');
formatter.feature({
  "id": "hello-world",
  "description": "",
  "name": "Hello World",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "hello-world;hello",
  "description": "",
  "name": "Hello",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I have a hello app \"Hello\"",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I ask to say hello",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "it should answer with \"Hello stefan\"",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 20
    }
  ],
  "location": "HelloWorldStepsDefs.greeting(String)"
});
formatter.result({
  "duration": 115857353,
  "status": "passed"
});
formatter.match({
  "location": "HelloWorldStepsDefs.sayHello()"
});
formatter.result({
  "duration": 64999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello stefan",
      "offset": 23
    }
  ],
  "location": "HelloWorldStepsDefs.answer(String)"
});
formatter.result({
  "duration": 2863796,
  "status": "passed"
});
});