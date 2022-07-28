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

transactions.post("/", (req, res) => {
    //creating a new transaction
    transactionsArray.push(req.body)
    console.log(req.body)
    res.send(transactionsArray[transactionsArray.length - 1])
})

transactions.put('/:id', (req, res) => {
    const { id } = req.params
    if (transactions[id]) {
      transactions[id] = req.body;
      res.send("Updated Tales.")
    } else {
      res.redirect('/error')
    }
  })

  transactions.delete("/:id", (req, res) => {
    const { id } = req.params;
  transactionsArray.splice(id, 1);
  res.send(transactionsArray[id])
  })

module.exports = transactions