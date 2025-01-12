import { Router } from "express";
import userRequestController from "../controller/userRequest.Controller.js";

const userRequestRouter = Router();

// Routes for user registration requests
userRequestRouter.post("/submit", userRequestController.submitRequest);
userRequestRouter.get("/", userRequestController.getAllRequests);
userRequestRouter.get("/:id", userRequestController.getRequestById);
userRequestRouter.post("/approve/:id", userRequestController.approveRequest);
userRequestRouter.post("/reject/:id", userRequestController.rejectRequest);

export default userRequestRouter; 