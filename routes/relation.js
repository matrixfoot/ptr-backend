const express = require('express');
const router = express.Router();
const RelationController = require('../controllers/relation');
const userController = require('../controllers/user');
router.get('/', RelationController.getRelations);
router.get('/:id', RelationController.getRelationbyid);
router.post('/add_multiple_Relations', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'relation'),RelationController.createmultipleRelation);
router.post('/sendsms', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'relation'),RelationController.sendsms);

router.delete('/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'relation'),RelationController.deleteRelation);
router.put('/:id', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'relation'),RelationController.updateRelation);
router.delete('/', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'relation'),RelationController.deleteRelations);
module.exports = router;