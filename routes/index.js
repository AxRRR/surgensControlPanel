const express =         require('express');
const { authLogin } =   require('../services/admin/controller');
const { createMember, loginMember } = require('../services/auth/controller');
const { 
    getListOfClans, 
    getListOfMembers, 
    getSpecificClan, 
    getSpecificMember, 
    getTopSpecificClan,
    getListOfTopClans,
    getSpecificDonationsClan,
    getDonationsClans,
    getSpecificWar,
    getWarlogClans
} =                     require('../services/globals/controller');

const router = express.Router();

// Request Clan
router.use('/clans', getListOfClans);
router.use('/specific_clan', getSpecificClan);
router.use('/all_members', getListOfMembers);
router.use('/specific_member', getSpecificMember);
router.use('/specific_top', getTopSpecificClan);
router.use('/all_top', getListOfTopClans);
router.use('/get_donations', getSpecificDonationsClan);
router.use('/all_donations', getDonationsClans);
router.use('/get_warlog', getSpecificWar);
router.use('/all_warlog', getWarlogClans);

// Authentication
router.use('/auth/register', createMember);
router.use('/auth/login', loginMember);

module.exports = router;