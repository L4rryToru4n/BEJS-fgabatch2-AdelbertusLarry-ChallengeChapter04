var express = require('express');
var router = express.Router();
const profile = require('../../../../controllers/profiles.controller')

/* CRUD profiles */
router.get('/', profile.getProfiles);
router.get('/:id', profile.getProfiles);
router.post('/create', profile.createProfile);
router.put('/update/:id', profile.updateProfile);
router.delete('/delete/:id', profile.deleteProfile);

module.exports = router;
