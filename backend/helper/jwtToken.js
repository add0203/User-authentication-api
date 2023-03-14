const JWT = require("jsonwebtoken");
const JWT_SECRET = "group_project";

exports.generateToken = (id, req, res) => {
  let token = JWT.sign({ id }, JWT_SECRET, { expiresIn: "10d" });
  if (!token) {
    res.send("token genration failed").status(400);
  }

  res.header("key", token).status(200);
  // res.send("user token created");
};
