# Angular V1 Unit Testing
> A simple project to demonstrate unit testing Angular modules, services and components using Mocha, Chai and Sinon.

## Getting Started
1. Run `npm install` from the repo root to install dependencies.
1. Run `npm test` to execute the unit tests.

## Notes
1. Unit testing Angular outside of the browser requires mocking certain Angular objects, which in turn requires mocking the DOM and certain global objects that are normally provided in the context of the browser. DOM mocking is provided by `jsdom`, and `angular-mocks` is used for Angular mocking and dependency injection.
1. Your Angular libraries, which are normally imported via `script` tags in your html, must be installed as Node dependencies.
1. The basic DOM and Angular mocks are setup in the `tests/test-helper.js` file. Include this file in your tests using `require('test-helper')` to provide the basic environment required for unit testing Angular modules, services, components, etc.
1. Depending on the modules your units depend on, additional mocking of the DOM or global objects may be required.

## Maintainer
Adam Bennett (adam.bennett@pointsource.com)
