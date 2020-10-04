## The Market

Full stack web application built for c37 final project at Wyncodw Academy

## Table of contents

The Market
Table of contents
Feature list
Getting started
Prerequisites
For developers
Built with // Build commands
Contributing
Project details
Author
Acknowledgements

## Feature List

Clean UI where consumers can connect with local, organic farmers

## Getting Started

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`
- Hosted on heroku

## Prerequisites

You will need a Web Browser (Chrome, or Mozilla, or Safari, or Opera, or Microsoft Edge ) to use the application
For Developers
See Contributing

## Built with

Node - JS Runtime Environment
Yarn - package manager
Express - Web Framework
MongoDB - Database
Mongoose - Database ORM
Postman - Platform for API Dev
React - Frontend Library
React-Router - Frontend Router

Git - Version Control

VS Code - Code Editor

Chrome - Browser

Heroku - cloud application platform

Cloudinary - image management

Invision - wireframe + product design

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## Contributing

Contributions are welcomed

## Project details

The Market is an SPA

It is deployed on Heroku

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## A list of technologies used are:

Node - JS Runtime Environment
Nodemon - Production restarting server
Yarn - package manager
Express - Web Framework
MongoDB - Database
Mongoose - Database ORM
Postman - Platform for API Dev
React - Frontend Library
React-Router - Frontend Router
Git - Version Control
VS Code - Code Editor
Chrome - Browser
Heroku - cloud application platform
Cloudinary - image management
Invision - wireframe + product design
Axios - HTTP Request + API Calls

## Dev Installation

This project was bootstrapped with Create React App and uses AppContext for state management. Run the following commands to install dependencies and run both server and client side concurrently
yarn install
yarn dev

Node

Node powers the website's backend. Allowing us to build scalable applications, that are asynchronous in nature and can have many connections handled concurrently.

Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development, seeing changes in real time.

Yarn

Yarn is the package manager we used for our app.

Express

Express is the web application framework used in this project. Express (along with jsonwebtoken and bcrypt) helps to write authenticated API calls

MongoDB

We used MongoDB as the database server of our choice due to the NoSQL nature of it .

Mongoose

We used the mongoose library validators to help us build out our database models

React

We used React and its adjoining JSX to build out our frontend.

React-Router

Also on the frontend we used React Router to set up easy navigation throughout the site.

Axios

We used axios to get data from the Recipe API to push random recipes in correlation to the product selected.

Postman

We used Postman to test out our API routes. Below you will find the Collection of all the routes we created to interact with our API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5404539a4617d50847ce)

Git
Git is the version control system of our choice.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Branches

master | Main branch

## Authors

Katie Breuil | Web Developer
Roberto Garcia | Web Developer
Michael Edgecombe | Web Developer
Matthew | Web Developer

## Acknowlegments

Thank you to the whole staff at Wyncode for their support and contributions to the Market. Additionally, special shout out to Kimbely Tupy, our UX|UI designer on the project.
