const express = require('express');
const router = express.Router();
const SiteController = require('../controller/siteController')
router.get('/getAll', SiteController.getAllData);
router.get('/getDataById', SiteController.getDataById);

router.post('/create-user', SiteController.createUser);
router.put('/update-user', SiteController.updateUser);
router.delete('/delete-user', SiteController.deleteUser);
router.get('/', SiteController.getHome);

module.exports = router;