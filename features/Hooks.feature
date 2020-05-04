Feature: Test Rohit Automation


Scenario Outline: Rohitautomation Test Scenario

Given User is already on Home Page

When Title of Home page is Welcome to Sai Family

And user clicks on Contacts List

And User enters FirsName as"<FirsName>" and LastName as "<LastName>"and DOB as "<DOB>"and AnniversaryDate as "<AnniversaryDate>" and Address as "<Address>" and Phone as "<Phone>" and Email as"<Email>"


And user clicks on submit button 


Then added record should be displayed

Examples:

   |FirsName |LastName|DOB|AnniversaryDate|Address|Phone|Email|
   |shwetabh|srivastava|25/11/1983|18/11/2013|Faridabad|7019048203|shwetabh.srivastava@gmail.com|
   |Mohit|srivastava|5/10/1993|5/10/2013|Lucknow|9099048203|mohit.srivastava@gmail.com|
   