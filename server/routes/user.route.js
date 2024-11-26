import { Router } from "express";
import { registerUserController } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/register", registerUserController);
console.log(userRouter);

export default userRouter;
