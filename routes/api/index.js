const router = require("express").Router();
const userRoutes = require("./user");
const imagesRoutes = require("./images");
const exhibitRoutes = require("./exhibits")
// const User = require("../../controllers/userController")
const db = require("../../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const exhibitRoutes = require("./exhibit")

router.use("/user", userRoutes);

router.use("/images", imagesRoutes);

router.use("/exhibit", exhibitRoutes)

router.post("/login", async function(req, res) {
  try {
    const {username, password } = req.body;

    // validate
    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await db.User.findOne({username:username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return rgit es.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
      },
    });
    console.log(token)
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});
        // });
router.use("/exhibit", exhibitRoutes);

module.exports = router;
