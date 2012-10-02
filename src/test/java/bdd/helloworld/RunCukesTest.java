package bdd.helloworld;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"progress", "html:target/cucumber"})
public class RunCukesTest{
}
