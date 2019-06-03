# Puissance 4

[![Build Status](https://travis-ci.org/NadiaPOI/Puissance4.svg?branch=master)](https://travis-ci.org/NadiaPOI/Puissance4)

A game power 4 in native javascript that can be played against the computer. The computer has a random AI that can be improved later to play on strategic positions.

### Pre required

  - Node.js v10.15.1
  - npm 6.9.0

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/NadiaPOI/Puissance4.git
$ cd Puissance4
$ npm install
```

### Run
The following command will run all your tests in a single run mode with coverage
```sh
$ npm run test
```

### Lint

I use eslint to check the coding style, with the following presets:

- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base): An advanced set of eslint rules for JavaScript and React made by Airbnb

The following command will run the linter on your code base. This task is ran at pre-commit to ensure code quality.
```sh
$ npm run lint
```

### Continuous Integration (CI)
This part is optional. A .travis.yml file is ready to use.

Each git push triggers a test suite on travis. The following will be ran:

- linting
- unit tests

### Deploy

I use github-pages to host this project. All you need to do is to push your build on a gh-pages orphan branch, this project will be accessible at https://<owner>.github.io/<repo>.
Verify the deployment by navigating to your server address in your preferred browser.

The demo of this website is hosted at https://nadiapoi.github.io/Puissance4/.