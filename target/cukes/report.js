$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality validation",
  "description": "Description: This feature will validate the search functionality for molnlycke site",
  "id": "search-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality-validation;search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user verifies the heading \"\u003cheading\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on search",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user verifies the title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the product to be searched \"\u003cproductName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user verifies the searchtitle \"\u003csearchTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verifies the records count \"\u003cresultCount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on searchlink \"\u003csearchurl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user exits",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality-validation;search-functionality;",
  "rows": [
    {
      "cells": [
        "url",
        "heading",
        "title",
        "productName",
        "searchTitle",
        "resultCount",
        "searchurl"
      ],
      "line": 18,
      "id": "search-functionality-validation;search-functionality;;1"
    },
    {
      "cells": [
        "https://www.molnlycke.com/",
        "Proving it every day",
        "Mölnlycke | Proving it every day",
        "biogel gloves",
        "Mölnlycke | Search",
        "8 results found",
        "https://www.molnlycke.com/products-and-solutions/surgical-solutions/biogel-gloves/"
      ],
      "line": 19,
      "id": "search-functionality-validation;search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality-validation;search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"https://www.molnlycke.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user verifies the heading \"Proving it every day\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on search",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user verifies the title \"Mölnlycke | Proving it every day\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the product to be searched \"biogel gloves\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user verifies the searchtitle \"Mölnlycke | Search\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verifies the records count \"8 results found\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on searchlink \"https://www.molnlycke.com/products-and-solutions/surgical-solutions/biogel-gloves/\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user exits",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.molnlycke.com/",
      "offset": 19
    }
  ],
  "location": "TestSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 19118710865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proving it every day",
      "offset": 27
    }
  ],
  "location": "TestSteps.user_verifies_the_heading(String)"
});
formatter.result({
  "duration": 177473709,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_search()"
});
formatter.result({
  "duration": 246142434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mölnlycke | Proving it every day",
      "offset": 25
    }
  ],
  "location": "TestSteps.user_verifies_the_title(String)"
});
formatter.result({
  "duration": 37228537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "biogel gloves",
      "offset": 40
    }
  ],
  "location": "TestSteps.user_enters_the_product_to_be_searched(String)"
});
formatter.result({
  "duration": 3674865873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mölnlycke | Search",
      "offset": 31
    }
  ],
  "location": "TestSteps.user_verifies_the_searchtitle(String)"
});
formatter.result({
  "duration": 47220627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8 results found",
      "offset": 33
    }
  ],
  "location": "TestSteps.user_verifies_the_records_count(String)"
});
formatter.result({
  "duration": 837998019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.molnlycke.com/products-and-solutions/surgical-solutions/biogel-gloves/",
      "offset": 27
    }
  ],
  "location": "TestSteps.user_clicks_on_searchlink(String)"
});
formatter.result({
  "duration": 2582369258,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_exits()"
});
formatter.result({
  "duration": 2624712071,
  "status": "passed"
});
});