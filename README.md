# Social-Network-API-NoSQL

![License Badge](https://img.shields.io/github/license/mmeii/workout-tracker)

## Summary

An API created for a social media network using MongoDB for a NoSQL database so that the website can handle large amounts of data.

## 📃 Table of Contents

* [Features](#features)
* [Installations](#installations)
* [Usage](#usage)
* [Mock-up](#mock-up)
* [Author](#author)

## ✨ Features

* Node.js
* Express.js
* MongoDB
* Insomnia

## ⚙ Installations

Mongoose - ODM library for MongoDB

```
npm i mongoose --save
```

## 👩🏻‍💻 Usage

When the server is started, the Mongoose models will be synced with the MongoDB database.
Routes available in Insomnia:

* API GET: get all users, get a single user, get all thoughts, and get a single thought.
* API POST: create new user, create new thought, create reaction to thought, and create new friend for user
* API PUT: update existing user, and update thought.
* API DELETE: delete single user, delete single thought, delete reaction, and delete friend.

**Additionally, the users associated thoughts will also be deleted when the user is deleted.

## 🖼 Mock Up

📹 [Walkthrough Video](https://drive.google.com/file/d/1JBrfKy6YljAnN12EzUUUkd6piHky2zwU/view?usp=sharing)

GET routes to return all users and all thoughts being tested in Insomnia:

![Animation showing GET routes for all users and all thoughts in Insomnia](./assets/GET-users-thoughts.gif)

GET routes to return a single user and a single thought:

![Animation showing GET routes for single user and single thought in Insomnia](./assets/GET-single-user-thought.gif)

POST, PUT, and DELETE routes for users:

![Animation showing the POST, PUT, and DELETE routes for users being tested in Insomnia](./assets/POST-PUT-DELETE-user.gif)

POST, PUT, and DELETE routes for thoughts:

![Animation showing the POST, PUT, and DELETE routes for thoughts being tested in Insomnia](./assets/POST-PUT-DELETE-thought.gif)

POST and DELETE routes for reactions to thoughts:

![Animation showing the POST and DELETE routes for reactions to thoughts being tested in Insomnia](./assets/POST-DELETE-reaction.gif)

POST and DELETE routes for a user’s friend list:

![Animation showing the POST and DELETE routes for user's friends being tested in Insomnia](./assets/POST-DELETE-friend.gif)

### 👋 Author

Check out my [Github profile](https://github.com/rheangocle) if you are interested in seeing more. For questions, please email me at rheangocle@gmail.com.

---
Copyright © 2022 Rhea Le
Licensed under [MIT](License) license
