import express from 'express';
import userController from '../controller/user.Controller.js';

const userRouter = express.Router();

userRouter.post("/login", userController.loginUser);

export default userRouter;