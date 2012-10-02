Feature: Hello World

  Scenario: Hello
    Given I have a hello app "Hello"
    When I ask to say hello
    Then it should answer with "Hello stefan"
