Feature: Search functionality validation 
	Description: This feature will validate the search functionality for molnlycke site.

@Search_for_Mölnlycke_site
Scenario Outline: Search Functionality 
	Given user navigates to "<url>" 
	When user verifies the heading "<heading>" 
	Then user clicks on search 
	And user verifies the title "<title>"            
	Then user enters the product to be searched "<productName>" 
	And user verifies the searchtitle "<searchTitle>" 
	And user verifies the records count "<resultCount>" 
	When user clicks on searchlink "<searchurl>" 
	Then user exits 
	
	Examples: 
	
		|url                        | heading              | title                             | productName   | searchTitle        |resultCount     | searchurl                                                                         |
		|https://www.molnlycke.com/ | Proving it every day | Mölnlycke \| Proving it every day | biogel gloves | Mölnlycke \| Search|8 results found | https://www.molnlycke.com/products-and-solutions/surgical-solutions/biogel-gloves/|
		