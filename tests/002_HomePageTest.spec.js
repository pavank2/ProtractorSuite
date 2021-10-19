const { browser, element, By } = require("protractor");
const searchResults = require("../pages/SearchResultsPage");
const homePage = require("../pages/HomePage");
const data = require("../data/data.json");
EC = protractor.ExpectedConditions;

describe("HomePage Search Scenario", () => {
  beforeAll(async() => {
     console.log("\nHomePage Search Scenario Preconditions");
     await browser.get(data.app.url);
     await browser.sleep(2000); // Adding sleep to slow down execution for the demo
     await browser.driver.manage().window().maximize();
     await homePage.acceptCookies();
     await browser.sleep(2000); 
  });

  it("Search for hotels in main page", async () => {
    console.log("\nTest : Search for hotels in main page\n");
     await homePage.addPeopleAndBedrooms();
     await browser.sleep(2000);
     await homePage.enterLocation();
     await homePage.enterDates();
     await browser.sleep(2000);
     await searchResults.verifyPropertyTypeSection();
  });
});
