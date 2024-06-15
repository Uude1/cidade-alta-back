const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControler');
const emblemsControler = require('../controllers/emblemsControler');

router.route("/user-location").get(userController.findAllUsers);
router.route("/login").post(userController.login);
router.route("/emblems").post(emblemsControler.assignRandomEmblemToUser);
router.route("/find-emblems").get(emblemsControler.findEmblemsUser);
router.route("/find-user").get(userController.findUser);
router.route("/update-user").put(userController.update);


module.exports = router;

