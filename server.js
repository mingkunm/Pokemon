// Imports
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const main = require("./server/routes/main");
const trainer = require("./server/routes/trainer");
// const pokemon = require("./server/routes/pokemon");

// Body Parser Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

app.get("/test", (req, res) => {
  res.send("this is test!");
});
app.use("/api/", main);
app.use("/api/trainer/", trainer);
// app.use("/api/pokemon", pokemon);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
