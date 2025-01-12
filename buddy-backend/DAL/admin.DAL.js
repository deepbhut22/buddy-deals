import Admin from "../model/admin.Model.js"
import { errorHandler } from "../utils/errorHandler.js";

const findAdminByEmail = async (data) => {
    try {
        const admin = await Admin.findOne({email: data.email});
        
        if (admin)
            return admin;
        else 
            return null;
    } catch (error) {
        throw error;
    }
}

const register = async (data) => {
    try {
        const newAdmin = await Admin.create({ email: data.email, password: data.password });
        return newAdmin;
    } catch (error) {
        if (error.code === 11000) {
            throw errorHandler(400, 'Duplicate email: Email must be unique.');
        }
        throw errorHandler(400, "database error while registering admin")
    }
};

const login = async (data) => {
    try {
        const admin = await Admin.findOne({email: data.email, password: data.password});
        if (admin) {
            return admin;
        }
        throw errorHandler(400, "No User With Given Email Exist");
    } catch (error) {
        throw error;
    }
}


const adminDAL = { register, login, findAdminByEmail };

export default adminDAL;
