# QA Challenge - Automation Repo

## Getting Started

This project requires the following:

- Tests are written in `TypeScript`.
- This framework utilizes `PlayWright` for test execution.
- IDE: The one of your preference.

## Installation:

1. Clone this repository:

```bash
    git clone https://github.com/leandrobalado/QA-Challenge
```

2. Install dependencies:

Using `npm` package manager:

```bash
    npm install
```

## Project Structure

- `/tests/specs`: Contains specs files to run tests for each part of the challenge.
- `/pages`: Contains files to handle POM.
- `/playwright.config.ts`: File which contains all Playwright configurations.

## .ENV file

We have to log in the web application before running some tests. In order to do that, you have to create a `.env` file in the root folder and complete the key-value so tests will consume it.

- It has this format:
  ```bash
  PASSWORD="*paste-your-value-here*"
  ```

> [!NOTE]
> Notice that `.env` file is added in `.gitignore` in order to prevent shearing secret key-values in a public repository. The password is provided in the following web app `https://www.saucedemo.com/`, copy paste from there.

## Running Tests

To run all tests, run this command in your terminal:
```bash
npm run test
```

The challenge has six steps.
To run Step 1, run this command in your terminal:
```bash
npm run test:step1
```
To run Step 2, run this command in your terminal:
```bash
npm run test:step2
```
To run Step 3, run this command in your terminal:
```bash
npm run test:step3
```
To run Step 4, run this command in your terminal:
```bash
npm run test:step4
```
To run Step 5, run this command in your terminal:
```bash
npm run test:step5
```
To run Step 6, run this command in your terminal:
```bash
npm run test:step6
```

To show the report of the test execution, run this command in your terminal:
```bash
npm run test:report
```