// const { MongoClient } = require("mongodb");

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   const collection = client.db("shopping-list").collection("items");
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("connected to mongoDB..."))
  .catch((err) => console.log(err));
