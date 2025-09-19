# 🧪 Basic Playwright with OrangeHRM

A starter project for end-to-end testing with [Playwright](https://playwright.dev) using the **[OrangeHRM demo application](https://opensource-demo.orangehrmlive.com/)**.  
This repository includes simple login tests and can be extended to cover employee management, dashboard validation, and more.

---

## 📌 Features
- ⚡ Playwright setup with Chromium, Firefox, and WebKit.  
- 🔑 Example login test using OrangeHRM demo site.

---

## 🔧 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/basic-playwright-orangehrm.git
   cd basic-playwright-orangehrm

2. Install dependencies:
    ``` npm install

3. Install browsers:
    ``` npx playwright install

### Running Tests
    * Run all test
    ``` npx playwright test

    * Run with UI mode:
    ``` npx playwright test --ui

    * Run in a specific browser:
    ``` npx playwright test --project=chromium