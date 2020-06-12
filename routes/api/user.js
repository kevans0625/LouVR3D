const router = require("express").Router();
const userController = require("../../controllers/userController")
// const passport = require("passport");

router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  
  
  router.route("/:id")
  .get(userController.findById)
  .put(userController.update)

  // router.route("/:id/:body")
module.exports = router