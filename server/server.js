const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const main = require("./routes/example");
const connectMongoDB = require("./db/mongodb");

connectMongoDB();

app.use(express.json());
app.use(cors());

app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
