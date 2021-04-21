const express = require("express");
const cors = require("cors");
require("dotenv").config();

const main = require("./routes/example");
// const connectMongoDB = require("./db/mongodb");

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// connectMongoDB();

app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
