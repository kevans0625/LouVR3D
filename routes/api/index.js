const router = require("express").Router();
const userRoutes = require("./user");
const imagesRoutes = require("./images");

const exhibitRoutes = require("./exhibit")

// const User = require("../../controllers/userController")
const db = require("../../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const auth = require("../../middelware/auth")

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
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.username,
      },
    });
    console.log(token)
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});

router.post("/tokenIsVerified", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await db.User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/validUser", auth, async (req, res) => {
  const user = await db.User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
});

module.exports = router;
