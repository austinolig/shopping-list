const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/Items");

// connection URI
const CONNECTION_URI =
  "mongodb+srv://dbAdmin:A1qnbHz0YqCps4sC@cluster0.ckssa.mongodb.net/shopping-list?retryWrites=true&w=majority";
// PORT number
const PORT = process.env.PORT || 5000;

// db connection
mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB...");
});

// create express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get("/", (req, res) => res.send("hi from index.js"));
app.use("/items", itemRoutes);

// server listening
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
