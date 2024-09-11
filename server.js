import express from "express";
import mongoose from "mongoose";
// import { getHomeRoute } from "./routes/homeRoute.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/tutorial")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    defaultValue: null,
  },
  address: {
    type: String,
    defaultValue: null,
  },
});

const User = mongoose.model("users", userSchema);

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("hello from M2");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("hello from M3");
//   next();
// });
// app.use(getHomeRoute);

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Michael Doe" },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello from Server" });
});

app.post("/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.post("/users/add", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists...Please Login",
      });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ success: true, message: "SignUp Successful" });
  } catch (error) {
    console.error("Error while adding user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error while adding user" });
  }
});

// app.post("/user", (req, res) => {
//   const { id } = req.body;
//   const user = users.find((u) => u.id === parseInt(id));
//   console.log(user);
//   user
//     ? res.status(200).json({ success: true, data: user })
//     : res.status(404).json({ success: false, data: "User not found" });
// });

app.get("/user/:id", (req, res) => {
  // const { id } = req.params;
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  res.status(200).json({ success: true, user: user ? user : null });
});

app.listen(5000, function () {
  console.log("Server is running on http://localhost:5000");
});
