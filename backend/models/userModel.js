const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String" },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    token: "String",
  },
  { lastLogin: { type: Date } }
);

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     const salt = await bcrypt.genSalt(9);

//     this.password = await bcrypt.hash(this.password, salt);
//   }
// });

let USERMODEL = mongoose.model("users", userSchema);
module.exports = USERMODEL;

//   pic: {
//       type: "String",
//       required: true,
//       default:
//         "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//     },
//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
