const { element, browser, By } = require("protractor");
const { protractor } = require("protractor/built/ptor");
const data = require("../data/data.json");
const EC = protractor.ExpectedConditions;


class HomePage {
  cookies = element(By.xpath("//button[./text()='Akzeptieren']"));
  searchBar = element(By.xpath("//input[@type='text']"));
  personPicker = element(By.xpath("//button[contains(@class,'personPicker')]"));
  ageOfChild = element(
    By.xpath("//select[starts-with(@class,'ml-auto')]//option[@value='1']")
  );

  confirmPersons = element(By.xpath("//button[contains(@class,'PersonPickerApplyButton')]"));
  // startDate = element(By.xpath("//div[contains(text(),'Anreise')]"));
  // endDate = element(By.xpath("//div[contains(text(),'Abreise')]"));
  calendarStartDate = element(
    By.xpath("//div[contains(text(),'"+data.travelDetails.monthOfTravel+"')]/parent::div//div[text()='"
    +data.travelDetails.dates.start+"']"));
  calendarEndDate = element(
    By.xpath("//div[contains(text(),'"+data.travelDetails.monthOfTravel+"')]/parent::div//div[text()='"
    +data.travelDetails.dates.end+"']"));
  searchButton = element(By.xpath("//button[@form='searchBarForm'][@type='submit']"));


  acceptCookies = async () => {
    await this.cookies.click();
  };

  enterLocation = async () => {
    await this.searchBar.sendKeys("Nordsee");
    await browser
      .actions()
      .sendKeys(protractor.Key.ARROW_DOWN)
      .sendKeys(protractor.Key.RETURN)
      .perform();
    browser.sleep(2000);
  };

  addPeopleAndBedrooms = async () => {
    browser.sleep(2000);

    await this.personPicker.click();
    browser.sleep(2000);
    await element
      .all(By.xpath("//button[contains(@class,'PlusButton')]"))
      .then(async function (noOfTravellers) {
        for (let i=0;i<data.travelDetails.noOfAdults-2;i++)  //Adding more adults
          await noOfTravellers[0].click();

        browser.sleep(2000);
        for (let i=0;i<data.travelDetails.noOfChildren;i++)  //Adding more children
          await noOfTravellers[1].click();
        browser.sleep(1000);

        browser.sleep(1000);
        for (let i=0;i<data.travelDetails.noOfBedrooms;i++)  //Adding more Bedrooms
          await noOfTravellers[2].click();
        browser.sleep(1000);
      });

    await this.ageOfChild.click();
    await browser.sleep(2000);
    await this.confirmPersons.click();
    await browser.sleep(1000);
  };


  enterDates = async () => {
    await this.calendarStartDate.click();
    await browser.sleep(1000);
    await this.calendarEndDate.click();
    await browser.sleep(2000);
  };
}

module.exports = new HomePage();
