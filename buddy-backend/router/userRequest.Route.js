import { Router } from "express";
import userRequestController from "../controller/userRequest.Controller.js";
import { uploadDocument } from "../config/multer.Config.js";

const userRequestRouter = Router();

// Routes for user registration requests
userRequestRouter.post("/register", uploadDocument, userRequestController.registerUser);
userRequestRouter.get("/", userRequestController.getAllRequests);
userRequestRouter.get("/:id", userRequestController.getRequestById);
userRequestRouter.post("/approve/:id", userRequestController.approveRequest);
userRequestRouter.post("/reject/:id", userRequestController.rejectRequest);

export default userRequestRouter; 