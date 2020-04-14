# Introduction
This application will encapsulate rudimentary features and workflow repeated for most mern applications. This will be a fully functioning app with User Create, Update and Delete with authentication-authorization capabilities.

## Features

**1. Signup:** User can register by creating a new account using an email address.

**2. User List:** Any visitor can see the list of all registered users.

**3. Authentication:** Registered users can sign in and sign out.

**4. Protected User Profile:** only registered users can view individual user details after signing in.

**5. Authorized user Edit and Delete:** Only a registered and authenticated user can edit or remove their own user account details.

## API endpoints for user crud


| Operation        | API route          | HTTP method  |
| -------------    |:------------------:| ------------:|
| create a user    | /api/users         |   POST       |
| List all users   | /api/users         |   GET        |
| Fetch a user     | /api/users/:userId |   GET        |
| Update a user    | /api/users/:userId |   PUT        |
| Delete a user    | /api/users/:userId |   DELETE     |
| User sign-in     | /auth/signin       |   POST       |
| User sign-out    | /auth/signout      |   GET        |    


## What you need to run this code
1. Node
2. NPM
3. MongoDB

## How to run this code
1.  Make sure MongoDB is running on your system
2.  Clone this repository
3.  Open command line in the cloned folder,
4.  To install dependencies, run npm install
5.  To run the application for development, run npm run development
6.  Open localhost:3000 in the browser
