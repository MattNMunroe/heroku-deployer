const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();

const PORT = 3003;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(PORT, () => console.log("Listening on port:", PORT));
