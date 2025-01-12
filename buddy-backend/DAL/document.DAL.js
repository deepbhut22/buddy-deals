import Document from "../model/document.Model.js";

const saveDocument = async (data) => {
    try {
        const newDocument = await Document.create(data);
        return newDocument;
    } catch (error) {
        throw error;
    }
}

const deleteDocument = async (documentId) => {
    try {
        const deletedDocument = await Document.findByIdAndDelete(documentId);
        if (!deletedDocument) {
            throw new Error('Document not found');
        }
        return deletedDocument;
    } catch (error) {
        throw error;
    }
}

const documentDAL = { 
    saveDocument,
    deleteDocument 
};
export default documentDAL;