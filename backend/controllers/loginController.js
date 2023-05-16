//connect to mongodb
const User = require("../models/signupModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jhdfdvjdjfvzsdjf sjdfhjsvdfjsdvf dsjfhsudfgvjsvdfjv";

//nevigate to login page
const loginView = async (req, res,next) => {
  res.render("login");
};
//nevigate to signup page
const signupView = async (req, res,next) => {
  res.render("signup");
};
//nevigate to forget password page
const forgotpasswordView = async (req, res,next) => {
  res.render("forgotPassword");
};
//create the user and store the data in database
const signup = async (req, res,next) => {
  const {
    first_name,
    last_name,
    registration_number,
    index_number,
    email,
    phone,
    password: plainTextPasswordA,
    re_enter_password: plainTextPasswordB,
  } = req.body;

  if (plainTextPasswordA !== plainTextPasswordB) {
    return res.json({ status: "error", message: "Passwords do not match" });
  }

  if (plainTextPasswordA.length < 8) {
    return res.json({
      status: "error",
      message:
        "Passwords length is too small.It should be al least 8 charactters",
    });
  }

  if (!first_name || typeof first_name !== "string") {
    return res.json({ status: "error", message: "invalied first name" });
  }

  if (!last_name || typeof last_name !== "string") {
    return res.json({ status: "error", message: "invalied last name" });
  }

  if (!registration_number || typeof registration_number !== "string") {
    return res.json({
      status: "error",
      message: "invalied registration number",
    });
  }

  if (!index_number || typeof index_number !== "string") {
    return res.json({ status: "error", message: "invalied index number" });
  }

  const hashPassword1 = await bcrypt.hash(plainTextPasswordA, 10);
  const hashPassword2 = await bcrypt.hash(plainTextPasswordB, 10);

  try {
    const response = await User.create({
      first_name,
      last_name,
      registration_number,
      index_number,
      email,
      phone,
      password: hashPassword1,
      re_enter_password: hashPassword2,
    });
    console.log("User created successfully", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", message: "Username Already in use" });
    }
    throw error;
  }
  return res.json({ status: "ok" });
};

//login to the user account using JWT
const login = async (req, res,next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({
      status: "error",
      message: "Invalid username or password",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    // Username password combination is successful
    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
    
  }

  res.json({ status: "error", message: "Invalid username or password" });
};

module.exports = {
  loginView,
  signupView,
  forgotpasswordView,
  signup,
  login,
};
