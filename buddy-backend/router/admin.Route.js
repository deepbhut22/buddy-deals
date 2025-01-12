import { Router } from "express";
import adminController from "../controller/admin.Controller.js";

const adminRouter = Router();

adminRouter.post("/register", adminController.adminRegister);
adminRouter.post("/login", adminController.adminLogin);


export default adminRouter;