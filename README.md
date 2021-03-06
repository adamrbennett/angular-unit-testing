# Angular V1 Unit Testing
> A simple project to demonstrate unit testing Angular modules, services and components.

## Getting Started
1. Run `npm install` from the repo root to install dependencies.
1. Run `npm run mocha-test` to execute the unit tests using jsdom and Mocha.js.
1. Run `npm run mocha-watch` to execute the unit tests using jsdom and Mocha.js watch mode.
1. Run `npm run karma-test` to execute the unit tests using Karma.
1. Run `npm run karma-watch` to execute the unit tests using Karma watch mode.

## Notes
1. Unit testing Angular outside of the browser requires mocking certain Angular objects, which in turn requires mocking the DOM and certain global objects that are normally provided in the context of the browser. DOM mocking is provided by `jsdom`, and `angular-mocks` is used for Angular mocking and dependency injection.
1. Your Angular libraries, which are normally imported via `script` tags in your html, must be installed as Node dependencies.
1. The basic DOM and Angular mocks are setup in the `tests/dom-mocks.js` file. Include this file in your tests using `require('dom-mocks')` to provide the basic environment required for unit testing Angular modules, services, components, etc.
1. Any additional modules necessary to support the module under test will need to be imported with `require` inside your test.
1. Depending on the modules your units depend on, additional mocking of the DOM or global objects may be required.

## Maintainer
Adam Bennett (adam.bennett@pointsource.com)
