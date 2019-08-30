# google-books

[Deployed Project](https://googlebookreactapp.herokuapp.com)

Google Books is a MERN Full Stack Web application that gives users the tool to search for books within the Google Books API. If users want to save a book that they like, they can simply click the Save button to save it locally. This is handled with MongoDB through the mongoose package. The Google Books API call and fetching saved books from the database is handled with and Express router. React Router is used to switch between the Search page and the Save page. A FontAwesome spinning icon is used to indicate server communication.

## Technologies
MongoDB, Express, React, Node, CSS3/Bootstrap

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.