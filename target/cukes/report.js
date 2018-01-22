$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search automation",
  "description": "Description: This feature will test the search functionality",
  "id": "search-automation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login Functionality",
  "description": "",
  "id": "search-automation;login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to https://www.molnlycke.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on I agree button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verifies title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_https_www_molnlycke_com()"
});
formatter.result({
  "duration": 22381630559,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_I_agree_button()"
});
formatter.result({
  "duration": 466514939,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_verifies_title()"
});
formatter.result({
  "duration": 35596159,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 8044914133,
  "status": "passed"
});
});