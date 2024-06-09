# cypress-cucumber-setup

## Init node project
> npm init


## Install and configure Cypress
> npm install cypress --save-dev

> npx cypress open


## Install cucumber dependencies
> npm install esbuild --save-dev​

> npm install @bahmutov/cypress-esbuild-preprocessor --save-dev​

> npm install @badeball/cypress-cucumber-preprocessor --save-dev


## Config cypress-cucumber-preprocessor dependencies
### Files:

> cypress.config.js

> .cypress-cucumber-preprocessorrc.json


### Folders:

> cypress/e2e/features

> cypress/e2e/step_definitions


## Execute tests by TAGS

> npx cypress run --env TAGS='@saucedemo'

> npx cypress open --env TAGS='@saucedemo'


### Conditional tagging:

> npx cypress run --env TAGS='@saucedemo and @smoke'

> npx cypress run --env TAGS='@saucedemo or @is_it_friday'

> npx cypress run --env TAGS='not @is_it_friday'
