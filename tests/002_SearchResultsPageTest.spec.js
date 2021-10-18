const { browser, element, By } = require("protractor");
const homePage = require("../pages/HomePage");
const searchResults = require("../pages/SearchResultsPage");
const data = require("../data/data.json");

const { assert } = require("chai");
const SearchResultsPage = require("../pages/SearchResultsPage");

describe("Select filters scenario", () => {
  beforeAll(async () => {
    console.log("\nScenario 2:\n");
    await browser.get(data.app.url);
    await browser.driver.manage().window().maximize();
    await browser.sleep(2000); // Adding sleep to slow down execution for the demo
    //await homePage.acceptCookies(); // This is required if this spec file is being run standalone
    await browser.sleep(2000);
    await homePage.enterLocation();
    await homePage.enterDates();
  });

  it("Verify Filter Options in Search Results Page",async () => {
    console.log("\nTest : Verify Search Results filters");
    await searchResults.selectPropertyType();
    await browser.sleep(2000);
    await browser.actions().mouseMove(searchResults.tv).perform();
    await browser.sleep(2000);
    await searchResults.selectPriceRange();
    await browser.sleep(2000);
    await browser.actions().mouseMove(SearchResultsPage.garten).perform();
    await browser.sleep(2000);
    await searchResults.selectAmenities();
    await browser.sleep(2000);
    await searchResults.clickOnSelectedProperty();
  });
});
