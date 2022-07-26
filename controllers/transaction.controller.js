const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.logs");

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})
//Get a list (or index) of all transactions

transactions.get("/:id", (req, res) => {
    const transactionId = req.params.id
    const foundTransaction = transactionsArray.find((transaction) => {
        return (
            transaction.id === parseInt(transactionId)
        )
    })
    res.send(foundTransaction)
})



module.exports = transactions