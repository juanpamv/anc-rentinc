# Gilead.com

Gilead Corporative website Rebuild - Front End Project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [NPM](https://nodejs.org/en/) - NPM for package management
* [SASS](https://sass-lang.com/install) - CSS preprocessor

### Installing

* 1) npm install | Install dependecies
* 2) npm run dev | Run command for development
* 3) npm run build | Run command for production build


## Run Project
Command: npm run dev | Run command for development


## Deployment
For deployment 
* 1) run Command: npm run build | Run command for production build
* 2) Use dist folder


## Development Considerations

### Styling
All the front end styling was build using sass.
* Framework: [Bootstrap](https://getbootstrap.com/)
* Naming Convention: [BEM](http://getbem.com/naming/)
* Folder Structure:
```
base | For reset and general font styles
components | independent component styles
helpers | functions, mixins and utilities
Layout | general layout styles
pages | page specific styles
vendors | external libraries styles   
```

### Scripts
Javascript funtionality use Module Reveal Design Pattern and is grouped in individual components

Reveal Design Pattern References
[Udemy Course](https://www.udemy.com/javascript-design-patterns-20-patterns-for-expert-code)
[Medium Article](https://medium.com/@jrschwane/writing-modular-javascript-pt-1-b42a3bd23685)
* Naming Convention: APP."component Name"
* Folder Structure:
```
components | independent component functionality
helpers | utilities
vendors | external libraries
```

### Bundling
Webpack was used to bundle javascript and styles

Css Description:
* Entry point: src/css/main.scss
* Process: Load sass, convert to css, apply prefixes, export to an external css file
* Output: dist/main.css

JS Description:
* Entry point: src/js/core.js
* Process: Load js, run babel to add es6 compatibility for really old browsers
* Output: dist/main.css


## Versioning

We use [gitlab](https://gitlab.publicishealth.com/) for versioning.
For development purposes we use a branch per development ticket on the features folder

```
ticket: GIL-49
Branch: features/GIL-49
```

For commits we use the nomenclature ticket - Subject - description
```
ticket: GIL-49
Commit: GIL-49 - Scaffolding - APP.js initial setup
```

## Authors

* **Digitas Health Team | Gilead -** - *Development* - [Digitas Health](https://www.digitashealth.com/)

