const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const compconfController = require('../controllers/files-treatment');
router.post('/createcompconf', compconfController.createcompconf);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), compconfController.getcompconf);
router.get('/:id', compconfController.getcompconfbyid);
router.put('/:id', userController.allowIfLoggedin,userController.grantAccess('updateOwn', 'profile'), compconfController.updatecompconf);
router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), compconfController.deletecompconfbyid);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'),compconfController.deletecompconfs);


router.post('/createworkgab', compconfController.createWorkgab);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), compconfController.getWorkgab);
router.get('/:id', compconfController.getWorkgabbyid);
router.put('/:id', userController.allowIfLoggedin,userController.grantAccess('updateOwn', 'profile'), compconfController.updateWorkgab);
router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), compconfController.deleteWorkgabbyid);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'),compconfController.deleteWorkgabs);

router.post('/createworkpos', compconfController.createWorkpos);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), compconfController.getWorkpos);
router.get('/:id', compconfController.getWorkposbyid);
router.put('/:id', userController.allowIfLoggedin,userController.grantAccess('updateOwn', 'profile'), compconfController.updateWorkpos);
router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), compconfController.deleteWorkposbyid);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'),compconfController.deleteWorkposs);


router.post('/createWorksms', compconfController.createWorksms);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), compconfController.getWorksms);
router.get('/:id', compconfController.getWorksmsbyid);
router.put('/:id', userController.allowIfLoggedin,userController.grantAccess('updateOwn', 'profile'), compconfController.updateWorksms);
router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), compconfController.deleteWorksmsbyid);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'),compconfController.deleteWorksmss);
module.exports = router;