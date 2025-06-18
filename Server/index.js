import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import EmployeeModel from "./Models/employee_model.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://priyan90204:Hello5@cluster0.2bqs9.mongodb.net/"
);
app.post("/signUp", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => console.log(err));
});

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
