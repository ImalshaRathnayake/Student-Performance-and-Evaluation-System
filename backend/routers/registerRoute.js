const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  loginView,
  signupView,
  forgotpasswordView,
  signup,
  login
} = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/login", loginView);
router.get("/signup", signupView);
router.get("/forgetpassword", forgotpasswordView);

router.post("/signup", signup); // New route to handle signup action
router.post("/login", login); // New route to handle signup action

module.exports = router;
