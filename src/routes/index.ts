import isValidJWT, { MiddlewareJWT } from '../middlewares/jwt';
import express from 'express';
import { getSpecificMember } from '../services/globals/controller';
// import { getSpecificMember } from '@/services/globals/controller';

// const {
//   createMember,
//   loginMember,
//   validateMemberTag,
//   emailVerification,
//   autoLogin,
// } = require('../services/auth/controller');
// const {
//   // getListOfClans,
//   // getListOfMembers,
//   // getSpecificClan,
//   // getSpecificMember,
//   // getTopSpecificClan,
//   // getListOfTopClans,
//   // getSpecificDonationsClan,
//   // getDonationsClans,
//   // getSpecificWar,
//   // getWarlogClans,
// } = require('../services/globals/controller');

const router = express.Router();

// Request Clan
// router.use('/clans', getListOfClans);
// router.use('/specific_clan', <MiddlewareJWT>isValidJWT, getSpecificClan);
// router.use('/all_members', getListOfMembers);
router.use('/specific_member', <MiddlewareJWT>isValidJWT, getSpecificMember);
// router.use('/specific_top', <MiddlewareJWT>isValidJWT, getTopSpecificClan);
// router.use('/all_top', getListOfTopClans);
// router.use(
//   '/get_donations',
//   <MiddlewareJWT>isValidJWT,
//   getSpecificDonationsClan
// );
// router.use('/all_donations', <MiddlewareJWT>isValidJWT, getDonationsClans);
// router.use('/get_warlog', <MiddlewareJWT>isValidJWT, getSpecificWar);
// router.use('/all_warlog', <MiddlewareJWT>isValidJWT, getWarlogClans);

// Authentication
// router.use('/auth/register', createMember);
// router.use('/auth/login', loginMember);
// router.use('/auth/getuser', <MiddlewareJWT>isValidJWT, autoLogin);
// router.use('/auth/validate_tag', validateMemberTag);
// router.use('/auth/confirm_email', emailVerification);

export default router;
