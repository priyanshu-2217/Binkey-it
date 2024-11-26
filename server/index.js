import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = 8080 || process.env.PORT;

app.get("/", (request, response) => {
  response.json({
    message: "Hello, World!",
  });
});

app.use("/api/user", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
