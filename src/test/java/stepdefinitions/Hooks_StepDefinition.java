	package stepdefinitions;
	import org.openqa.selenium.By;
	import org.openqa.selenium.JavascriptExecutor;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.chrome.ChromeDriver;
	import org.testng.Assert;
	import cucumber.api.java.After;
	import cucumber.api.java.Before;
	import cucumber.api.java.en.And;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;
	public class Hooks_StepDefinition {
    WebDriver driver;
    
	  @Before
	  public void beforeFirst()
	  {
	  System.out.println("Before of first Tag");
	  System.setProperty("webdriver.chrome.driver",  "D:\\Cucumberworkspace\\CucumberTagsHooks\\chromedriver_81.exe");
	  driver=new  ChromeDriver(); 
	  driver.manage().window().maximize();
	  }
	  @After
	  public void afterFirst() 
	  { 
	  driver.quit();
	  System.out.println("After of first Tag"); 
	  }
	  
	  @Given("User is already on Home Page") 
	  public void user_is_already_on_Home_Page() throws InterruptedException {
	  driver.get("http://www.rohitautomation.co.in/");
	  System.out.println("User is already on Home Page");
	  Thread.sleep(10000); }
	@When("Title of Home page is Welcome to Sai Family")
	public void title_of_Home_page_is_Welcome_to_Sai_Family() throws InterruptedException {
		String title=driver.getTitle();
		Assert.assertEquals("Welcome To Sai Family",title);
		System.out.println("Welcome to Sai Family");
	   Thread.sleep(30000);
	}
	@When("user clicks on Contacts List")
	public void user_clicks_on_Contacts_List() throws InterruptedException {
				WebElement loginbtn=driver.findElement(By.xpath("//a[text()='Contacts List']"));	
				JavascriptExecutor  js=(JavascriptExecutor)driver;
				js.executeScript("arguments[0].click", loginbtn);
				driver.findElement(By.xpath("//a[text()='Contacts List']")).click();;
				Thread.sleep(20000);
				System.out.println("user clicks on Contacts List");
	}
		@When("User enters FirsName as{string} and LastName as {string}and DOB as {string}and AnniversaryDate as {string} and Address as {string} and Phone as"
				+ " {string} and Email as{string}")
		public void user_enters_FirsName_as_and_LastName_as_and_DOB_as_and_AnniversaryDate_as_and_Address_as_and_Phone_as_and_Email_as(String FirstName,
				String LastName, String DOB, String AnniversaryDate, String Address, String Phone, String Email) throws InterruptedException
		{
			Thread.sleep(5000);
			driver.findElement(By.name("FirstName")).sendKeys(FirstName);
			Thread.sleep(5000);
			driver.findElement(By.name("LastName")).sendKeys(LastName);
			Thread.sleep(5000);
			driver.findElement(By.name("DOB")).sendKeys(DOB);
			Thread.sleep(5000);
			driver.findElement(By.name("AnniversaryDate")).sendKeys(AnniversaryDate);
			Thread.sleep(5000);
		    driver.findElement(By.name("Address")).sendKeys(Address);
			Thread.sleep(5000); driver.findElement(By.name("Phone")).sendKeys(Phone);
			Thread.sleep(15000);
			driver.findElement(By.name("Email")).sendKeys(Email); 
			Thread.sleep(15000);
	}
	@When("user clicks on submit button")
	public void user_clicks_on_submit_button() throws InterruptedException 
	{
		driver.findElement(By.xpath("//button[text()='Submit']")).click();
		Thread.sleep(10000);
	}
	@Then("added record should be displayed")
	public void added_record_should_be_displayed() throws InterruptedException 
	{
		driver.findElement(By.xpath("//table[@class='responsive-table highlight']/tr[last()]")).isDisplayed();
		Thread.sleep(10000);
	}
	}