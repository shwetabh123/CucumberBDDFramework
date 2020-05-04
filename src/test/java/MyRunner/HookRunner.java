package MyRunner;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import java.io.File;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
//Working for JSON Report ------------.json file is generated also ----WORKIGN WITH  pom.xml
@RunWith(Cucumber.class)
@CucumberOptions(
		features= "features/Hooks.feature",
		glue={"stepdefinitions"},
        plugin = {"pretty",
        		"html:target/cucumber-html-report",
		  "json:target/cucumber.json"
        		},
       
		monochrome = true,//to display the console output in a proper readable format
		strict=true,//it will check if any step is not defined in step def file
		dryRun=false//to check mapping is proper between feature file & step def file
		)
public class HookRunner  {
	
	
}