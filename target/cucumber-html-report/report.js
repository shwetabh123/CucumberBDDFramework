$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Hooks.feature");
formatter.feature({
  "name": "Test Rohit Automation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Rohitautomation Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title of Home page is Welcome to Sai Family",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Contacts List",
  "keyword": "And "
});
formatter.step({
  "name": "User enters FirsName as\"\u003cFirsName\u003e\" and LastName as \"\u003cLastName\u003e\"and DOB as \"\u003cDOB\u003e\"and AnniversaryDate as \"\u003cAnniversaryDate\u003e\" and Address as \"\u003cAddress\u003e\" and Phone as \"\u003cPhone\u003e\" and Email as\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "added record should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirsName",
        "LastName",
        "DOB",
        "AnniversaryDate",
        "Address",
        "Phone",
        "Email"
      ]
    },
    {
      "cells": [
        "shwetabh",
        "srivastava",
        "25/11/1983",
        "18/11/2013",
        "Faridabad",
        "7019048203",
        "shwetabh.srivastava@gmail.com"
      ]
    },
    {
      "cells": [
        "Mohit",
        "srivastava",
        "5/10/1993",
        "5/10/2013",
        "Lucknow",
        "9099048203",
        "mohit.srivastava@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Rohitautomation Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_already_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Home page is Welcome to Sai Family",
  "keyword": "When "
});
formatter.match({
  "location": "Hooks_StepDefinition.title_of_Home_page_is_Welcome_to_Sai_Family()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Contacts List",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_Contacts_List()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters FirsName as\"shwetabh\" and LastName as \"srivastava\"and DOB as \"25/11/1983\"and AnniversaryDate as \"18/11/2013\" and Address as \"Faridabad\" and Phone as \"7019048203\" and Email as\"shwetabh.srivastava@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_enters_FirsName_as_and_LastName_as_and_DOB_as_and_AnniversaryDate_as_and_Address_as_and_Phone_as_and_Email_as(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "added record should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.added_record_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rohitautomation Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_is_already_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Home page is Welcome to Sai Family",
  "keyword": "When "
});
formatter.match({
  "location": "Hooks_StepDefinition.title_of_Home_page_is_Welcome_to_Sai_Family()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Contacts List",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_Contacts_List()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters FirsName as\"Mohit\" and LastName as \"srivastava\"and DOB as \"5/10/1993\"and AnniversaryDate as \"5/10/2013\" and Address as \"Lucknow\" and Phone as \"9099048203\" and Email as\"mohit.srivastava@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_enters_FirsName_as_and_LastName_as_and_DOB_as_and_AnniversaryDate_as_and_Address_as_and_Phone_as_and_Email_as(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Hooks_StepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "added record should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks_StepDefinition.added_record_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});