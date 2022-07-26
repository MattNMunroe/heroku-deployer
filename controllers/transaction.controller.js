const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.logs");

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})
//Get a list (or index) of all transactions

module.exports = transactions