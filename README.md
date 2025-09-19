# 🧪 Basic Playwright with OrangeHRM

A starter project for end-to-end testing with [Playwright](https://playwright.dev) using the **[OrangeHRM demo application](https://opensource-demo.orangehrmlive.com/)**.  
This repository includes simple login tests and can be extended to cover employee management, dashboard validation, and more.

---

## 📌 Features
- ⚡ Playwright setup with Chromium.  
- 🔑 Example login test using OrangeHRM demo site.

---

## 🔧 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/basic-playwright-orangehrm.git

2. Install dependencies:
    ``` bash
    npm install

3. Install browsers:
    ``` bash
    npx playwright install

### Running Tests

* Run all test:
   ``` bash
    npx playwright test

* Run with UI mode:
   ``` bash
    npx playwright test --ui

* Run in a specific browser:
   ``` bash
    npx playwright test --project=chromium