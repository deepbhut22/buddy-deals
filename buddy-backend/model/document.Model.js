import mongoose from "mongoose";

const singleDocumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    }
});

const documentSchema = new mongoose.Schema({
    buddyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    documents: [singleDocumentSchema]
});

export default mongoose.model('Document', documentSchema);