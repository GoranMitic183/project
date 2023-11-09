const express = require("express");
const cors = require("cors");
// import morgan from 'morgan'
const morgan = require("morgan");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "laksndsfoihLKHDSGGNOI@LK#J2o32jrnwekjsnkvsd";
let User = require("./models/user.model");
let Program = require("./models/trainingProgram.model");

const app = express();
const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
mongoose.connect("mongodb://0.0.0.0:27017/clients", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// app.use("/", usersRouter);

app.post("/register", async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName && !lastName && typeof lastName != "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }
  if (!email || typeof email != "string") {
    return res.json({ status: "error", error: "Invalid email" });
  }
  if (password.length < 8) {
    return res.json({ status: "error", error: "Invalid password" });
  }
  const hpassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ firstName, lastName, hpassword, email });
    console.log("User je kreiran: ", user);
    return res.json({ status: "ok", user: user });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username exist" });
    }
    console.log(error);
    throw error;
  }
  // res.json({ status: "ok"});
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid email/password" });
  }
  if (await bcrypt.compare(password, user.hpassword)) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_SECRET
    );
    return res.json({ status: "ok", token: token });
  } else {
    res.json({ status: "error", error: "Invalid email/password" });
  }
});

app.get("/training", async (req, res) => {
  const trainingData = await Program.find({});
  if (!trainingData || trainingData.length === 0) {
    return res.json({ status: "error", error: "Cant find any data!" });
  }
  return res.json({ status: "ok", data: trainingData });
});

// app.post('/buy', async (req, res) => {

// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
