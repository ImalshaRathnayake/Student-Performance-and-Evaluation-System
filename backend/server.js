//call the packages
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const nodemon = require("nodemon");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin_imalsha:imalsha@cluster0.o9hpbok.mongodb.net/pes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//connect to routers
const loginRoute = require("./routers/registerRoute");
//create app for server.js
const app = express();

//declare the port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));

// Serve static files
app.use(express.static(path.join(__dirname, "views")));

app.use("/", loginRoute);
