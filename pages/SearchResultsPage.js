const { element, browser, By } = require("protractor");
const data = require("../data/data.json");
const EC = protractor.ExpectedConditions;

class SearchResultsPage {
  propertyTypeHeader = element(By.xpath("//span[./text()='Art der Unterkunft']"));
  chalet = element(By.xpath("//div[@class='pb-xl']//span[./text()='"+data.searchFilters.propertyType+"']"));
  priceRanges = element.all( By.xpath("//div[contains(@class,'RangeSliderHandle')]"));
  tv = element(By.xpath("//div[@class='pb-xl']//span[./text()='"+data.searchFilters.amenities+"']"));
  garten = element(By.xpath("//div[@class='pb-xl']//span[./text()='Garten']"));
  // selectProperty = element(By.xpath("//span[./text()='Strandchalet Elmo Ii']/ancestor::a[@class='css-122yymy']//button[./text()='Zum Angebot']"));
  // Not using above one as this property might not be available during review demo
  selectProperty = element(By.xpath("//button[./text()='Zum Angebot']"));
  noOfPeopleResultsPage = element(By.xpath("//button[contains(@class,'has-personsAndBedrooms')]//div"));
  locationResultsPage = element(By.xpath("//input[@value='Nordsee, Deutschland']"));

  verifyPropertyTypeSection = () => {
   expect(this.propertyTypeHeader.isPresent()).toBe(true);
  };

  //This method verifies if search terms given in home page are reflected in search results page
  verifySearchInputsInResultsPage = async () => {
    // Verifies location
    expect(await this.locationResultsPage.isPresent()).toBe(true);   
    //Verifies number of people and beds
    expect(await this.noOfPeopleResultsPage.getText()).toContain('5 Personen');
    expect(await this.noOfPeopleResultsPage.getText()).toContain('2 Schlafzimmer');
    //Verifies start and end dates
    await element
    .all(By.xpath("//div[@class='text-black-ultra whitespace-nowrap font-bold']"))
    .then(async function(dateRanges){
      expect(await dateRanges[0].getText()).toEqual("Mo., 1. Nov.");
      expect(await dateRanges[1].getText()).toEqual("So., 7. Nov.");

    });

  }
  selectPropertyType = async () => {
    await this.chalet.click();
  };

  selectPriceRange = async () => {
    await browser.wait(EC.visibilityOf(element(By.xpath("//div[@style='left: 204px;']")), 5000));

    await element
      .all(By.xpath("//div[contains(@class,'RangeSliderHandle')]"))
      .then(function (sliders) {
        expect(sliders.length).toBe(2);
        browser.actions().dragAndDrop(sliders[1], { x: -100, y: 0 }).perform();
      });
    browser.sleep(5000);
  };

  selectAmenities = async () => {
    await this.tv.click();
    await browser.sleep(4000);
  };

  clickOnSelectedProperty = async () => {
    await this.selectProperty.click();
    browser.sleep(2000);

  };
}

module.exports = new SearchResultsPage();
