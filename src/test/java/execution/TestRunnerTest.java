package execution;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"Features"}, glue = { "step_Definations" }, 
format = {"pretty", "html:target/cukes", "json:target/cukes/report.json", "junit:target/cukes/junit.xml"})
public class TestRunnerTest {

}