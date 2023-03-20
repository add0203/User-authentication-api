const express = require("express");
const userRoutes = require("./routes/userRoute");
const bodyparser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

//routes

app.use("/user", userRoutes);
// app.use("/api/user", userRoutes);

//DB
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_LINK, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "projectX",
  })
  .then(() => {
    console.log("DB is READY");
  })
  .catch((err) => {
    console.log(err);
  });

//server

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
