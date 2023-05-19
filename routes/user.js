const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const multer = require('../middleware/multer-config3');
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/signout', userController.signout);
/*router.post('/verify-email', userController.verifyEmail);
router.post('/forgot-password', userController.forgotPassword);
router.post('/validate-reset-token', userController.validateResetToken);
router.post('/reset-password', userController.resetPassword);
router.post('/add_multiple_users', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'event'),userController.createmultipleusers);*/
router.get('/:id', userController.getUser);
router.get('/deleteduser/:id', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.getUserdeleted);
router.post('/filteruserrole', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruserrole);
router.post('/filteruseremail', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruseremail);
router.post('/filteruserfonction', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruserfonction);
router.post('/filteruserfirstname', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruserfirstname);
router.post('/filteruserlastname', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruserlastname);
router.post('/filteruserchoice', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'),userController.filteruserchoice);
router.get('/deletedusers/all', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsersdeleted);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readOwn', 'profile'), userController.getUsers);
router.put('/:id', userController.allowIfLoggedin,multer, userController.grantAccess('updateOwn', 'profile'), userController.updateUser);
router.put('/complete/:id', userController.allowIfLoggedin,userController.grantAccess('updateOwn', 'profile'), userController.completeUser);
router.put('/desactivate/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.desactivateUser);
router.put('/activate/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.activateUser);
router.put('/standby/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.makeuseronstandby);
router.put('/nostandby/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.liberateuser);
router.put('/connect/:id', userController.connected);
router.put('/disconnect/:id', userController.disconnected);

router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);
router.delete('/temporardelete/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUsertemporare);
router.delete('/restaure/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.restaureuser);
module.exports = router;