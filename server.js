// connect express js
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");

const app = express();

// connect database connection function
const connectDatabase = require("./databaseConnect");

dotenv.config();

connectDatabase();

const PORT = process.env.PORT || 8081

// Request json
app.use(require("express").json());
app.use(cors());

// required the to-do list router
const toDoListRouter = require('./routes/toDolist');

// sample route
app.get("/", (req, res) => {
  res.send("Welcome to the ToDo List Backend!!!!");
});

// Use the to-do list router for all routes starting with '/'
app.use('/todolists', toDoListRouter);

// start the server

app.listen(PORT, () => {
  console.log(`DoList app with listening on port http://localhost:${PORT}`);
});
