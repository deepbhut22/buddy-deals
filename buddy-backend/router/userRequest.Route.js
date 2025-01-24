import { Router } from "express";
import userRequestController from "../controller/userRequest.Controller.js";
import multer from "multer";

const userRequestRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory temporarily
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  },
});

const uploadDocuments = upload.fields([
  { name: 'doc1', maxCount: 1 },
  { name: 'doc2', maxCount: 1 },
  { name: 'doc3', maxCount: 1 },
  { name: 'doc4', maxCount: 1 },
]);

// Routes for user registration requests
userRequestRouter.post("/register", userRequestController.uploadDocuments, userRequestController.registerUser);
userRequestRouter.get("/", userRequestController.getAllRequests);
userRequestRouter.get("/:id", userRequestController.getRequestById);
userRequestRouter.post("/approve/:id", userRequestController.approveRequest);
userRequestRouter.post("/reject/:id", userRequestController.rejectRequest);

export default userRequestRouter; 