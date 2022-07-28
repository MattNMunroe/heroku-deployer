const express = require("express");
const app = express();
const cors = require('cors');
const transactionController = require("./controllers/transaction.controller");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use("/transactions", transactionController)
