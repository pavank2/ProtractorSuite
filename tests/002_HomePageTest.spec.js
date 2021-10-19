const { browser, element, By } = require("protractor");
const searchResults = require("../pages/SearchResultsPage");
const homePage = require("../pages/HomePage");
const data = require("../data/data.json");
EC = protractor.ExpectedConditions;

/**
 * Summary: This scenario searches for properties from Holidu main page Search bar 
 */
describe("HomePage Search Scenario", () => {
  beforeAll(async() => {
     console.log("\nScenario 1: HomePage Search Scenario: Executing Preconditions");
     await browser.get(data.app.url);
     await browser.sleep(2000); // Adding sleep to slow down execution for the demo
     await browser.driver.manage().window().maximize();
     await homePage.acceptCookies();
     await browser.sleep(2000); 
  });

  it("Search for Properties in main page", async () => {
    console.log("\nTest : Search for Properties in main page\n");
     await homePage.addPeopleAndBedrooms();
     await browser.sleep(2000);
     await homePage.enterLocation();
     await homePage.enterDates();
     await browser.sleep(2000);
     await searchResults.verifyPropertyTypeSection();  //Verify if successfully navigated to search results page
     await searchResults.verifySearchInputsInResultsPage();
  });
});
