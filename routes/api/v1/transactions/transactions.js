var express = require('express');
var router = express.Router();
const transaction = require('../../../../controllers/transactions.controller')

/* CRUD transactions */
router.get('/', transaction.getTransactions);
router.get('/:id', transaction.getTransaction);
router.post('/create', transaction.createTransaction);
router.put('/update/:id', transaction.updateTransaction);
router.delete('/delete/:id', transaction.deleteTransaction);

module.exports = router;
