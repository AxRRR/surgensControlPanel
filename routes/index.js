const express =         require('express');
const { authLogin } =   require('../services/admin/controller');
const { 
    getListOfClans, 
    getListOfMembers, 
    getSpecificClan, 
    getSpecificMember, 
    getTopSpecificClan,
    getListOfTopClans
} =                     require('../services/globals/controller');

const router = express.Router();

router.use('/auth/login', authLogin);

// Request Clan
router.use('/clans', getListOfClans);
router.use('/specific_clan', getSpecificClan);
router.use('/all_members', getListOfMembers);
router.use('/specific_member', getSpecificMember);
router.use('/specific_top', getTopSpecificClan);
router.use('/all_top', getListOfTopClans);

module.exports = router;