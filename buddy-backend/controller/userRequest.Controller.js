import UserRequest from "../model/userRequest.Model.js";
import User from "../model/user.Model.js";
import documentDAL from "../DAL/document.DAL.js";
import mongoose from "mongoose";
import multer from 'multer';

// Submit a new user registration request
// const submitRequest = async (req, res) => {
//     try {
//         // First save the documents
//         console.log(req.body.documents);
//         const documentData = {
//             buddyId: new mongoose.Types.ObjectId(), // Generate a new ID for future user
//             documents: req.body.documents.documents
//         };
        
//         // in future create a service to save the document to s3 and save the url to the database.
//         const savedDocuments = await documentDAL.saveDocument(documentData);

//         const newRequest = new UserRequest({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: req.body.password,
//             phoneNumber: req.body.phoneNumber,
//             documents: savedDocuments._id // Store the document reference
//         });

//         const savedRequest = await newRequest.save();
//         res.status(201).json({
//             message: "Request submitted successfully",
//             data: savedRequest
//         });
//     } catch (error) {
//         res.status(500).json({ 
//             message: error.message,
//             success: false 
//         });
//     }
// };


import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

// Configure AWS S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Configure Multer for File Uploads
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

// Function to Upload a File to S3
const uploadFileToS3 = async (file, key) => {
  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key, // Unique file name
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const upload = new Upload({
      client: s3Client,
      params: uploadParams,
    });
    const result = await upload.done();
    return result.Location; // Return the file's URL
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};

// Controller to Handle Registration
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, countryCode } = req.body;

    if (!firstName || !lastName || !email || !password || !phone || !req.files) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload each document to AWS S3
    const documentUrls = {};
    for (const [key, file] of Object.entries(req.files)) {
      const uniqueKey = `documents/${Date.now()}_${file.originalname}`;
      documentUrls[key] = await uploadFileToS3(file, uniqueKey);
    }

    // Save user details in the database
    const newUser = new UserRequest({
      firstName,
      lastName,
      email,
      password, // Hash the password before saving
      phoneNumber: `${countryCode}${phone}`,
      documents: documentUrls,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Middleware for Handling File Uploads
export const uploadDocuments = upload.fields([
  { name: "doc1", maxCount: 1 },
  { name: "doc2", maxCount: 1 },
  { name: "doc3", maxCount: 1 },
  { name: "doc4", maxCount: 1 },
]);

// Get all registration requests (simplified version)
const getAllRequests = async (req, res) => {
    try {
        const requests = await UserRequest.find({}, 'firstName lastName');
        res.status(200).json({
            success: true,
            data: requests
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false 
        });
    }
};

const getUsers = async (req, res) => {
  try {
    const filters = { ...req.query }; 
    const page = Math.max(1, parseInt(filters.page) || 1); // Default to page 1
    const MAX_LIMIT = 100; // Cap limit to prevent overloading
    const limit = Math.min(MAX_LIMIT, Math.max(1, parseInt(filters.limit) || 10)); // Default to 10 docs per page

    // Remove pagination parameters from filters
    delete filters.page;
    delete filters.limit;

    // Build MongoDB query with filters
    const query = {};
    for (const key in filters) {
      if (filters[key]) {
        query[key] = { $regex: filters[key], $options: "i" };
      }
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Fetch data with filters, skip, and limit
    const users = await UserRequest.find(query).skip(skip).limit(limit);

    // Get the total count of documents matching the filters (for frontend)
    const total = await UserRequest.countDocuments(query);

    // Return results with pagination info
    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Get a specific request by ID with full details
const getRequestById = async (req, res) => {
    try {
        const request = await UserRequest.findById(req.params.id)
            .populate('documents') // Add this line to include the documents data
          
        if (!request) {
            return res.status(404).json({ 
                message: "Request not found",
                success: false 
            });
        }

        res.status(200).json({
            success: true,
            data: request
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false 
        });
    }
};

// Approve a request and create new user
const approveRequest = async (req, res) => {
    try {
        // First find the request with all its data
        const request = await UserRequest.findById(req.params.id)
            .populate('documents');  // Get the associated documents

        if (!request) {
            return res.status(404).json({ 
                message: "Request not found",
                success: false 
            });
        }

        // Create new user from the request data
        const newUser = new User({
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            password: request.password,
            phoneNumber: request.phoneNumber,
            documents: request.documents._id,  // Keep the same document reference
            buddyId: `BUD${Date.now()}`  // Generate buddyId
        });

        // Save the new user
        const savedUser = await newUser.save();

        // Delete the original request since it's now approved
        await UserRequest.findByIdAndDelete(req.params.id);

        res.status(200).json({ 
            message: "Request approved and user created successfully",
            success: true,
            data: savedUser
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false 
        });
    }
};

// Reject a request
const rejectRequest = async (req, res) => {
    try {
        // Find the request first to get user details before deletion
        const request = await UserRequest.findById(req.params.id)
            .populate('documents');

        if (!request) {
            return res.status(404).json({ 
                message: "Request not found",
                success: false 
            });
        }

        // Delete the associated documents
        await documentDAL.deleteDocument(request.documents._id);

        // Delete the user request
        await UserRequest.findByIdAndDelete(req.params.id);

        res.status(200).json({ 
            message: "Request and associated documents deleted successfully",
            success: true 
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false 
        });
    }
};



export default {
    registerUser,
    getUsers,
    getAllRequests,
    getRequestById,
    approveRequest,
    rejectRequest,
    uploadDocuments
}; 