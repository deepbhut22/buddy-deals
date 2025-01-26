import UserRequest from "../model/userRequest.Model.js";
import User from "../model/user.Model.js";
import documentDAL from "../DAL/document.DAL.js";
import multer from 'multer';
import saveFileToLocalStorage from "../utils/saveFileToLocalStorage.js";
import bcrypt from 'bcrypt';


// Middleware for Handling Single Document Upload
export const uploadDocument = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
}).single("document"); // "document" is the name of the form field

const registerUser = async (req, res) => {
  try {
      console.log(req.body);

      console.log("okyy!");

      const { firstName, lastName, email, password, phone, service, category, documentName } = req.body;
      if (!firstName || !lastName) {
        return res.status(400).json({ message: "First Name and Last Name are required" });
      }
      if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });      
      }
      if (!phone) {
        return res.status(400).json({ message: "Phone Number is required" });      
      }
      if (!service || !category) {
        return res.status(400).json({ message: "Service and Category is required" });      
      }

      // Check if email is already registered
      const existingUser = await UserRequest.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already registered" });
      }

      const documentUrl = saveFileToLocalStorage(req.file, "documents");

      const hashedPass = await bcrypt.hash(password, 12);

      const newUser = new UserRequest({
      firstName,
      lastName,
      email,
      password: hashedPass,
      phoneNumber: phone,
      document: {name: documentName || "this is default document name", url: documentUrl}, // Save document URL
      service,
      category,
    });

    await newUser.save();


    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Server error", error: error.message, redirect: '/login' });
    }
};



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
    uploadDocument
}; 