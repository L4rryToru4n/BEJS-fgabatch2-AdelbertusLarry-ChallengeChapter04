var express = require('express');
var router = express.Router();
const account_transaction = require('../../../../controllers/account_transaction.controller')

/* GET account transactions */
router.get('/', account_transaction.getAccountTransactions);
router.get('/:account_id', account_transaction.getAccountTransaction);

module.exports = router;
