const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const main = require("./routes/example");
// const connectMongoDB = require("./db/mongodb");

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/test", (req, res) => {
  res.send("this is test!");
});

// connectMongoDB();

app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
