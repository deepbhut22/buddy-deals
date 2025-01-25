import { request } from "express";
import mongoose, { mongo } from "mongoose";

const userRequestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number, 
        required: true,
    },
    document: {
        name: { type: String, required: true },
        url: { type: String, required: true },
    },
    service: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    requestedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('UserRequest', userRequestSchema);