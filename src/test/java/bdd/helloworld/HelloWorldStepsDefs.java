package bdd.helloworld;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.When;
import cucumber.annotation.en.Then;

import static org.junit.Assert.assertEquals;
public class HelloWorldStepsDefs{
    private Hello hello;
    private String hi;

    @Given("^I have a hello app \"([^\"]*)\"$")
    public void greeting(String greeting){
        hello = new Hello(greeting);
    }

    @When("^I ask to say hello$")
    public void sayHello(){
        hi = hello.salute();
    }
    @Then("^it should answer with \"([^\"]*)\"$")
    public void answer(String expected){
        assertEquals(expected,hi);
        System.out.println("Test successful!");
    }
}