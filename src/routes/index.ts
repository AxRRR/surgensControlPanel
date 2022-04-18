import isValidJWT, { MiddlewareJWT } from '../middlewares/jwt';
import express from 'express';
import {
  getDonationsClans,
  getLastestPost,
  getListOfClans,
  getListOfMembers,
  getListOfTopClans,
  getPost,
  getSpecificClan,
  getSpecificDonationsClan,
  getSpecificMember,
  getSpecificWar,
  getTopSpecificClan,
  getWarlogClans,
} from '../services/publics/public.controller';
import {
  autoLogin,
  createMember,
  emailVerification,
  loginMember,
  validateMemberTag,
} from '../services/auth/auth.controller';
import {
  acceptAscent,
  adminDeleteUser,
  adminUpdateUser,
  lastRegistedMember,
} from '../services/dashboard/administrador/admin.controller';
import { createNewPost, createNewRecommendation } from '../services/dashboard/globals/global.controller';
import { createNewReport, deleteSpecificPost } from '../services/dashboard/moderator/mod.controller';

const router = express.Router();

// Request Clan
router.use('/clans', getListOfClans);
router.use('/specific_clan', <MiddlewareJWT>isValidJWT, getSpecificClan);
router.use('/all_members', getListOfMembers);
router.use('/specific_member', <MiddlewareJWT>isValidJWT, getSpecificMember);
router.use('/specific_top', <MiddlewareJWT>isValidJWT, getTopSpecificClan);
router.use('/all_top', getListOfTopClans);
router.use(
  '/get_donations',
  <MiddlewareJWT>isValidJWT,
  getSpecificDonationsClan
);
router.use('/all_donations', <MiddlewareJWT>isValidJWT, getDonationsClans);
router.use('/get_warlog', <MiddlewareJWT>isValidJWT, getSpecificWar);
router.use('/all_warlog', <MiddlewareJWT>isValidJWT, getWarlogClans);

// Authentication
router.use('/auth/register', createMember);
router.use('/auth/login', loginMember);
router.use('/auth/getuser', <MiddlewareJWT>isValidJWT, autoLogin);
router.use('/auth/validate_tag', validateMemberTag);
router.use('/auth/confirm_email', emailVerification);

// Administrador Request
router.use('/admin/update', adminUpdateUser);
router.use('/admin/delete', adminDeleteUser);

// RecommendedUser Request
router.use('/global/recommended/create', createNewRecommendation);
router.use('/global/recommended/response', acceptAscent);

// Create new post
router.use('/global/post/create', createNewPost);
router.use('/global/post/getlastest', getLastestPost);
router.use('/global/post/get', getPost);
router.use('/global/report/create_report', createNewReport);

// Solo moderadores y administradores
router.use('/global/post/delete', deleteSpecificPost);

// Get last user registed
router.use('/admin/get_lastmember_registed', lastRegistedMember);


export default router;
