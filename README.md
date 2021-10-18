# Protractor Suite

## Summary

- The project has been implemented using Protractor Javascript Framework with Jasmine and Chai libraries.
- Page Object Model (POM) design pattern has been used to implement the project.
- Protractor beautiful Reporter is used to generate HTML Reports

## Scenarios

There are 2 scenarios which are part of 2 Spec files.

- HomePageTest.spec.js : On Holidu Hoempage search bar, adds location, dates and no. of people and searches for property 
- SearchResultsPage.spec.js : Starts again from home page, applies multiple filters on the search results and selects the first property

- Note: "Sleep" function is added in few of the steps to slow down execution for demo purposes.
## Recommended Configuration
- Windows 10
- Java JDK 15.0.2 (Required to run the Selenium webdriver)
- node.js 16.10.0
- npm 7.24.1
- Chrome Version 94
- Visual Studio Code (not mandatory for execution)

## Instructions to execute the Automation Suite

1. On any command prompt or terminal, install Protractor globally

   - npm install -g protractor

2. Update webdriver-manager to check for latest updates

   - webdriver-manager update

3. Start webdriver manager

   - webdriver-manager start
     (You should see selenium driver has started at port 4444)

4. On a NEW terminal, clone the Automation project to your local machine

   - git clone /https://github.com/pavank2/ProtractorSuite.git

5. Navigate to the Project folder and install the dependencies (already part of package.json)

   - cd ProtractorSuite
   - npm init (Go with the default values)
   - npm install
     (You might have to run "npm i --save-dev @types/node" if any dependencies are not resolved)

6. Run the tests!

   - npm run tests

7. On the command prompt, notice the tests executing (passed test/spec is represented with a dot ".")

8. HTML report of the latest execution can be seen at {PROJECT_HOME}/reports/report.html

If something doesn't work, please feel free to contact me :-)
