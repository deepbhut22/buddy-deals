import UserRequest from "../model/userRequest.Model.js";
import User from "../model/user.Model.js";
import documentDAL from "../DAL/document.DAL.js";
import mongoose from "mongoose";

// Submit a new user registration request
const submitRequest = async (req, res) => {
    try {
        // First save the documents
        console.log(req.body.documents);
        const documentData = {
            buddyId: new mongoose.Types.ObjectId(), // Generate a new ID for future user
            documents: req.body.documents.documents
        };
        
        const savedDocuments = await documentDAL.saveDocument(documentData);
        const newRequest = new UserRequest({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            documents: savedDocuments._id // Store the document reference
        });

        const savedRequest = await newRequest.save();
        res.status(201).json({
            message: "Request submitted successfully",
            data: savedRequest
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
            success: false 
        });
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
    submitRequest,
    getAllRequests,
    getRequestById,
    approveRequest,
    rejectRequest
}; 