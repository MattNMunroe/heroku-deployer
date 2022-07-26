const express = require("express");
const app = express();
const cors = require('cors');
const transactionController = require("./controllers/transaction.controller");

require("dotenv").config();

const PORT = 3003;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use("/transactions", transactionController)

app.listen(process.env.PORT || 3003, (() => {
    console.log(`Listening on port ${process.env.PORT}`)
}) 

);