# **Cypress Automation for WeRateDogs Website** 🐶

This repository contains a **Cypress automation framework** for testing the **We Rate Dogs** website. It covers various functionalities of the website, ensuring that the site's features work as expected. 🖥️💻

---

## **Project Overview**

The goal of this project is to **automate testing** for the **We Rate Dogs** website. The testing is structured around **Page Object Model (POM)**, which ensures that the code is clean, modular, and reusable.

---

## **Setup Instructions**


🔹 1. Clone the repo
Clone the repository to your local machine:  
```bash
git clone https://github.com/rahejacharu/cypress-coding-assignment.git

🔹 2. Install Dependencies
Navigate to the project directory and install dependencies:
 Navigate to the project directory and install the necessary dependencies:

 cd cypress-coding-assignment  
 cd qa
 npm install

 🔹 3. Run Tests via Command Line 
 Run the tests through the command line:

🔹 4. Run Tests via Cypress UI
  This will open the Cypress Test Runner where you can select specific tests to run.


## **Code Structure**

🧱 Code Structure-

The project is structured as follows:

1.qa/pages: Contains Page Object Model classes for the various sections of the website (e.g., header, footer, adoption process).

2.qa/cypress/e2e: Contains the test spec files for each feature tested (e.g., header.cy.js, footer.cy.js).

3.qa/cypress/support/commands.js: Custom Cypress commands for reusable actions (e.g., navigating to certain pages).

4.cypress/fixtures: Contains test data (e.g., search-hoodie).

5.cypress/docs/strategyplan: Contains the high-level testing strategy for the assignment.



Test Execution
Running Tests:
Command Line:
Use npx cypress run to run all tests from the command line.

UI Mode:
Use npx cypress open to open the Cypress UI, where you can select individual tests to run.
