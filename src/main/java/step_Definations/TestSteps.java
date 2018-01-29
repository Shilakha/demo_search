package step_Definations;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	public static WebDriver driver;

	
	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\shilakha\\Desktop\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(arg1);
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[@class='button confirmation']")).click();
	}

	
	@When("^user verifies the heading \"([^\"]*)\"$")
	public void user_verifies_the_heading(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String actualHeading = driver.findElement(By.xpath("//div[text()='Proving it every day']")).getText();
		String expectedHeading = arg1;
		assertEquals(expectedHeading, actualHeading);
	}

	
	@Then("^user clicks on search$")
	
	public void user_clicks_on_search() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebElement e = driver.findElement(By.xpath("//button[@id='open-search-takeover']"));
		e.click();
	}

	
	@Then("^user verifies the title \"([^\"]*)\"$")
	
	public void user_verifies_the_title(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String actualTitle = driver.getTitle();
		String expectedTitle = arg1;
		// System.out.println("actualtitle"+actualTitle);
		// System.out.println("expectedtitle"+arg1);
		assertEquals(expectedTitle, actualTitle);
	}

	
	@Then("^user enters the product to be searched \"([^\"]*)\"$")
	
	public void user_enters_the_product_to_be_searched(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='Search']")).sendKeys(arg1);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	
	@Then("^user verifies the searchtitle \"([^\"]*)\"$")
	
	public void user_verifies_the_searchtitle(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String actualTitle = driver.getTitle();
		String expectedTitle = arg1;
		// System.out.println("actualtitle"+actualTitle);
		// System.out.println("expectedtitle"+arg1);
		assertEquals(expectedTitle, actualTitle);
	}

	
	@Then("^user verifies the records count \"([^\"]*)\"$")
	
	public void user_verifies_the_records_count(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		String actualCount = driver.findElement(By.xpath("//div/p[@class=\"search-result-hitcount\"]")).getText();
		String expectedCount = arg1;
		assertEquals(expectedCount, actualCount);
		// System.out.println(actualCount);
	}

	
	@When("^user clicks on searchlink \"([^\"]*)\"$")
	
	public void user_clicks_on_searchlink(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebDriverWait wait = new WebDriverWait(driver, 80);
		wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(), \"Biogel gloves\")]")));
		driver.findElement(By.xpath(
				"//a[contains(@href, 'https://www.molnlycke.com/products-and-solutions/surgical-solutions/biogel-gloves/')]"))
				.click();
	}

	
	@Then("^user exits$")
	
	public void user_exits() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.quit();
	}

}
