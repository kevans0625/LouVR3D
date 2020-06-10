const router = require("express").Router();
const userController = require("../../controllers/userController")
const passport = require("passport");

router.route("/")
  .get(userController.findAll)
  .post(userController.create)


   


module.exports = router