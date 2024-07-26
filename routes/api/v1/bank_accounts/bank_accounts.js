var express = require('express');
var router = express.Router();
const bank_account = require('../../../../controllers/bank_accounts.controller')

/* CRUD transactions */
router.get('/', bank_account.getBankAccounts);
router.get('/:id', bank_account.getBankAccount);
router.post('/create', bank_account.createBankAccount);
router.put('/update/:id', bank_account.updateBankAccount);
router.delete('/delete/:id', bank_account.deleteBankAccount);

module.exports = router;
