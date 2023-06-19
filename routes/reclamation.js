const express = require('express');
const router = express.Router();
const reclamationController = require('../controllers/reclamation');
const userController = require('../controllers/user');
const multer = require('../middleware/multer-config3');
router.post('/', multer,reclamationController.createreclamation);
router.post('/reclamation', userController.allowIfLoggedin, userController.grantAccess('readOwn', 'carousel'),reclamationController.getReclamation);
router.get('/', userController.allowIfLoggedin, userController.grantAccess('readAny', 'carousel') ,reclamationController.getreclamations);
router.get('/:id', userController.allowIfLoggedin, userController.grantAccess('readOwn', 'carousel'),reclamationController.getreclamationbyid);
router.put('/:id', userController.allowIfLoggedin, multer ,userController.grantAccess('updateAny', 'carousel'),reclamationController.updatereclamation);
router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('updateOwn', 'carousel'),reclamationController.deletereclamation);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'carousel'),reclamationController.deletereclamationss);



module.exports = router;