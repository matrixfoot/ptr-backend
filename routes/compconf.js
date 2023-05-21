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

module.exports = router;