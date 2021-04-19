const express = require("express");
const app = express();
const cors = require("cors");

const main = require("./routes/example");

app.use(express.json());
app.use(cors());

app.use("/api/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
