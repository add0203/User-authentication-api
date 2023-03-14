// let express = require("express");
// const AsyncHandler = require("express-async-handler");
// const { generateToken } = require("../helper/jwtToken");
let email_validator = require("email-validator");
// const JWT = require("");
const USERMODEL = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helper/jwtToken");

exports.register = async (req, res) => {
  let { name, email, password } = req.body;
  // console.log(req.body);
  if (
    !name ||
    !email ||
    !password ||
    !email_validator.validate(email)
    // ||
    // !password.length >= 6
  ) {
    res.status(400);
    res.send("feild is messing");
  }

  const userExists = await USERMODEL.findOne({ email: email });

  if (userExists) {
    res.status(400);
    res.send("User already exists");
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = await USERMODEL.create({
    name,
    email,
    password: hashedPass,
    lastLogin: Date.now(),
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, req, res),
    });
  } else {
    res.status(400);
    res.send("User not found");
  }
};

exports.signIn = async (req, res) => {
  //retrieve data from req.body
  let { email, password } = req.body;

  //validation of data field in body
  if (
    !email ||
    !password ||
    !email_validator.validate(email) ||
    !password.length >= 6
  ) {
    console.log(password, email);
    res.status(401).send("feild is missing");
  } else {
    //checking presence of the user in  db
    const userExists = await USERMODEL.findOne({ email: email });

    //compaire the password with the hash password present in the db
    let compare = bcrypt.compareSync(password, userExists.password);

    if (userExists && compare) {
      userExists.lastLogin = Date.now();
      await userExists.save();
      generateToken(userExists._id, req, res);
      res.send("User SignIn").status(200);
    } else {
      res.send("user doesn't Exist").status(400);
    }
  }
};

// exports.signIn = AsyncHandler(async (req, res) => {
//   let { email, password } = req.body;
//   // let { token } = req.params;

//   if (!email || !password) {
//     res.status(400);
//     res.send("field is messing");
//   }

//   const userExists = await USERMODEL.findOne({ email: email });
//   const pass = bcrypt.compare(password, userExists.password);
//   if (!userExists) {
//     res.status(400);
//     res.send("User already Exist");
//   } else {
//     if (userExists && pass) {
//       userExists.lastLogin = Date.now();

//       const JWT_SECRET = "group_project";

//       // const genToken = jwt.sign(
//       //   {
//       //     userId: userExists._id,
//       //   },
//       //   JWT_SECRET,
//       //   { expiresIN: "1d" }
//       // );
//       // console.log(Date.now());
//       await userExists.save();
//       res.status(201).json({
//         _id: userExists._id,
//         name: userExists.name,
//         email: userExists.email,
//         token: genToken,
//       });
//     } else {
//       res.send("user not varified || wrong credential").status(400);
//     }
//   }
// });
