// Imports
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const main = require("./server/routes/example");

// Body Parser Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/test", (req, res) => {
  res.send("this is test!");
});
app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
