import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import EmployeeModel from "./Models/employee_model.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://priyan90204:Hello5@cluster0.2bqs9.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
app.post("/create-account", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await EmployeeModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new EmployeeModel({ name, email, password });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during user registration:", err);
    return res.status(500).json({ message: "Server error" });
  }
});
app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const user = await EmployeeModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Validate password (NOTE: In production use hashed passwords!)
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // 3. Success
    return res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
