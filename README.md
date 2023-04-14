# cyGPT

cyGPT is a project based on Cypress, aiming to provide a set of automated tests for various types of applications. The tests were developed by an OpenAI language model, specifically the GPT-3.5 architecture, trained to generate human-like natural language.

## Pre-requirements

Before cloning and running the cyGPT project, you need to have the following tools installed:

- Git
- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

To install cyGPT, follow these steps:

- Clone the repository:

```bash
git clone https://github.com/your-username/cyGPT.git
```

- Install the dependencies:

```bash
cd cyGPT
npm install
```

## Tests

To run the tests in headless mode, use the following command:

```bash
npm test
```

To run the tests in interactive mode, use the following command:

```bash
npm run cy:open
```

Both commands will run all the tests located in the `cypress/e2e` directory. Make sure that the application you want to test is running and accessible before running the tests.

Note that cyGPT is a work in progress, and more tests will be added over time to cover different use cases and scenarios.
