
## Project Overview

The website allows the user to browse several diffrent recipes. It also allows the user to create, delete, and update his own recipe via creating an account and logging in. if the user isnt logged in, he cant modify his recipe.


## Authentication Process

Sign up
![App Screenshot]![signup](https://github.com/ABDULLRAHMAN7/Web-development-project/assets/122542486/10628603-cda9-40af-9336-c54dc77c4fe3)

<h1>Login</h1>
![App Screenshot]<img src= "login.PNG" width="600px">
## Home page

The Home for a user with no account screen consists of the following:

1-The image of the food

2-The food name

3-the Recipe and its origin

4-Date of the creation of the Recipe

![App Screenshot](../Downloads/Home(No%20account).jpeg)
The Home for a Logged in user contains everything with the inclusion of:

1-Edit and Delete Button

![App Screenshot](../Downloads/Home(Logged%20in).jpeg)
## Edit page

The Edit page gives the logged user the ability to make changes regarding the recipe's name, description, and location. after that the user saves the changes by pressing the update button.

![App Screenshot](../Downloads/Edit.jpeg)
## Add page

Allows the logged user to create a new recipe via entering a name, description, and origin. Then pressing the Add button.


![App Screenshot](../Downloads/Add.jpeg)
## Flowchart

1-For Login:
![App Screenshot](../Downloads/Flowchart%20login.jpeg)

2-For Edit:
![App Screenshot](../Downloads/Flowchart%20Edit.jpeg)

3-For Add:
![App Screenshot](../Downloads/Flowchart%20Add.jpeg)

## Setup

First, You need to download:

1-MongoDB via:

(https://www.mongodb.com/try/download/community)

2-NodeJS via:

(https://nodejs.org/en/download/package-manager)

3-ExpressJS:
(https://expressjs.com/en/starter/installing.html)

Then connect them all via visual Studios:
(https://code.visualstudio.com/download)


make sure all the files are present and are connected to the routers.





## Technologies used

We utilized a multitude of techologies:

1-MongoDB

2-NodeJS

3-JavaScript

4-CSS

5-Bootstrap

6-JQuery

7-ExpressJS

8-VS code

9-Bcrypt

10-Passport

11-Axios

12-Body-parser

13-Connect-flash

14-Nodemon


## Installation

In order to run this project, use npm:

```bash
  $ npm install node_events
  $ nodemon start
```
    
## Goals

This website has many goals:

1- Reduce time needed looking for a certain recipe.

2- Allow users to introduce new recipes to the culinary world.

3- Enable users to edit or delete recipes their own recipes.

## Future Work

We aim to introduce to more features in order to increase user's experience like:

1- increase the loading speed.

2- give recommendations to the user based on their previous interactions.

3- add categories for recipes that give more precise details.

## Team Members

1- Fawaz Muhammad Mufti

2- Abdulrahman Abdullah Albasher

3- Sulaiman Albassam

## Rescources

### Bootstrap
- *Name*: Bootstrap
- *Description*: Bootstrap is a popular open-source CSS framework for building responsive, mobile-first websites. It provides a wide range of pre-built components and styles that were used in the development of this website.
- *Link*: https://getbootstrap.com/

### Express.js
- *Name*: Express.js
- *Description*: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It was used as the server-side framework for this project.

### Nodemon
- *Name*: Nodemon
- *Description*: Nodemon is a utility that automatically restarts the Node.js application when file changes in the directory are detected. It was used during the development of this project to enable live reloading and faster iteration.
- *Link*: https://nodemon.io/

### Mongoose
- *Name*: Mongoose
- *Description*: Mongoose is an Object Document Mapping (ODM) library for MongoDB and Node.js. It was used in this project to interact with a MongoDB database, including defining data models, querying, and performing CRUD (Create, Read, Update, Delete) operations.
- *Link*: https://mongoosejs.com/

### Connect-flash
- *Name*: Connect-flash
- *Description*: Connect-flash is a middleware for Express that allows you to pass temporary messages between requests. It was used in this project to display success or error messages to the user after certain actions, such as login, logout, or form submissions.
- *Link*: https://www.npmjs.com/package/connect-flash

 ### Body-parser
- *Name*: Body-parser
- *Description*: Body-parser is a middleware for Express that helps parse incoming request bodies in JSON, URL-encoded, or raw formats. It was used in this project to extract and process form data submitted by users.
- *Link*: https://www.npmjs.com/package/body-parser


