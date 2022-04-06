const express =         require('express');
const { isValidJWT } = require('../middlewares/jwt');
const { authLogin } =   require('../services/admin/controller');
const { 
    createMember, 
    loginMember, 
    validateMemberTag, 
    emailVerification,
    autoLogin
} =                     require('../services/auth/controller');
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
router.use('/specific_clan', isValidJWT, getSpecificClan);
router.use('/all_members', getListOfMembers);
router.use('/specific_member', isValidJWT, getSpecificMember);
router.use('/specific_top', isValidJWT, getTopSpecificClan);
router.use('/all_top', getListOfTopClans);
router.use('/get_donations', isValidJWT, getSpecificDonationsClan);
router.use('/all_donations', isValidJWT, getDonationsClans);
router.use('/get_warlog', isValidJWT, getSpecificWar);
router.use('/all_warlog', isValidJWT, getWarlogClans);

// Authentication
router.use('/auth/register', createMember);
router.use('/auth/login', loginMember);
router.use('/auth/getuser', isValidJWT, autoLogin);
router.use('/auth/validate_tag', validateMemberTag);
router.use('/auth/confirm_email', emailVerification)

module.exports = router;