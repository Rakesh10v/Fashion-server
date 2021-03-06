const { signup, login } = require("../Controller/authController");
const { checkUser } = require("../Middleware/authMiddleware");

const router = require("express").Router();

router.post("/", checkUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
