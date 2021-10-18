exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  //directConnect: true,
  specs: ["tests/*.spec.js"],
  framework: "jasmine",

  capabilities: {
    browserName: "chrome",
    acceptInsecureCerts: true,
    "goog:chromeOptions": {
      w3c: false,
    },
  },

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);
    let HtmlReporter = require("protractor-beautiful-reporter");
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "reports",
        screenshotsSubfolder: "screenshotsOnFailure",
        takeScreenShotsOnlyForFailedSpecs: true,
        jsonsSubfolder: "jsonFiles",
        excludeSkippedSpecs: true,
        preserveDirectory: false,
        clientDefaults: {
          showTotalDurationIn: "header",
          totalDurationFormat: "h:m:s",
          gatherBrowserLogs: true,
        },
      }).getJasmine2Reporter()
    );
  },
};
