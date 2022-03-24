const express = require('express');
const { authLogin } = require('../services/admin/controller');
const { getListOfClans, getListOfMembers } = require('../services/globals/controller');

const router = express.Router();

router.use('/auth/login', authLogin);

// Request Clan
router.use('/clan/clans', getListOfClans);
router.use('/clan/members', getListOfMembers);

module.exports = router;