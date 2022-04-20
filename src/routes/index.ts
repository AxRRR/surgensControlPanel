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
  getAscents,
  lastRegistedMember,
} from '../services/dashboard/administrador/admin.controller';
import { createNewPost, createNewRecommendation, createNewReport } from '../services/dashboard/globals/global.controller';
import { addNewSpecificObjective, createNewsObjectives, deleteSpecificObjectives, deleteSpecificPost, getLastestReports, responseSpecificReport, updateSpecificObjectives } from '../services/dashboard/moderator/mod.controller';
import { changeSpecificStatus, getSpecificObjectives } from '../services/dashboard/leader_clan/leader.controller';

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
router.use('/admin/update', <MiddlewareJWT>isValidJWT, adminUpdateUser);
router.use('/admin/delete', <MiddlewareJWT>isValidJWT, adminDeleteUser);

// RecommendedUser Request
router.use('/global/recommended/create', <MiddlewareJWT>isValidJWT, createNewRecommendation);
router.use('/global/recommended/response', <MiddlewareJWT>isValidJWT, acceptAscent);
router.use('/global/recommended/get_all', <MiddlewareJWT>isValidJWT, getAscents);

// Create new post
router.use('/global/post/create', <MiddlewareJWT>isValidJWT, createNewPost);
router.use('/global/post/getlastest', getLastestPost);
router.use('/global/post/get', getPost);
router.use('/global/report/create_report', <MiddlewareJWT>isValidJWT, createNewReport);

// Colideres y Veteranos solo en modo lectura
router.use('/leader/get_objectives', <MiddlewareJWT>isValidJWT, getSpecificObjectives);

// Solo lider y sublider
router.use('/leader/change_status', <MiddlewareJWT>isValidJWT, changeSpecificStatus);

// Solo moderadores y administradores
router.use('/global/post/delete', <MiddlewareJWT>isValidJWT, deleteSpecificPost);
router.use('/mod/response_report', <MiddlewareJWT>isValidJWT, responseSpecificReport);
router.use('/mod/get_reports', <MiddlewareJWT>isValidJWT, getLastestReports);
router.use('/mod/create_objectives', <MiddlewareJWT>isValidJWT, createNewsObjectives);
router.use('/mod/update_objectives', <MiddlewareJWT>isValidJWT, updateSpecificObjectives);
router.use('/mod/delete_objectives', <MiddlewareJWT>isValidJWT, deleteSpecificObjectives);
router.use('/mod/create_new_objectives', <MiddlewareJWT>isValidJWT, addNewSpecificObjective);

// Get last user registed
router.use('/admin/get_lastmember_registed', <MiddlewareJWT>isValidJWT, lastRegistedMember);


export default router;
