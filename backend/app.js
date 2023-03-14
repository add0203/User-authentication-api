const express = require("express");
const userRoutes = require("./routes/userRoute");
const bodyparser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

//routes

app.use("/user", userRoutes);
app.use("/api/user", userRoutes);

//DB
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017", {
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
PORT = 3002;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
