const router = require("express").Router();
const exhibitController = require("../../controllers/exhibitController")
router.route("/")
  .post(exhibitController.create)
  .get(exhibitController.findAll);
router.route("/:userID")
.get(exhibitController.findById);
module.exports = router