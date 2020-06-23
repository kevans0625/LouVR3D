const router = require("express").Router();
const exhibitController = require("../../controllers/exhibitController")
router.route("/")
  .post(exhibitController.create)
  .get(exhibitController.findAll);
router.route("/:id")
.get(exhibitController.findById)
.delete(exhibitController.remove);

module.exports = router