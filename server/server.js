const express = require("express");
const cors = require("cors");
require("dotenv").config();

const main = require("./routes/example");
// const connectMongoDB = require("./db/mongodb");

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connectMongoDB();

app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
