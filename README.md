# Project-Management-System
This is a basic Project Management System which lets users create projects and clients and assign them to each other. The front-end is built with React JS and Bootstrap. The back-end is comprised of Node/Express as well as a single GraphQL endpoint for querying and interacting with a NoSQL document-oriented MongoDB database. This project also contains Cypress end-to-end testing, covering various scenarios.

The project contains two GraphQL types: Client and Project. The Project type is a parent of the Client type, meaning that a project can have a client.

## Installation
```sh
git clone https://github.com/emcakmak/Project-Management-System.git
cd Project-Management-System
npm install
cd client
npm install
```

## Running The Application Locally
```sh
npm run dev
cd client
npm start
```

## Running The Cypress End-To-End Tests
```sh
cd tests
```

## Acknowledgements
This project was inspired by Brad Traversy from Traversy Media. Check out his [Github](https://github.com/bradtraversy) page.
