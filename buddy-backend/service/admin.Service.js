import adminDAL from '../DAL/admin.DAL.js'
import { errorHandler } from '../utils/errorHandler.js';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';


const salt = 12;
const register = async (data) => {
    try {
        // console.log(data);
        
        if (data.email === "" || data.email.length < 3 || data.password.length < 6) {
            throw errorHandler(400, "email or password are not validated");
        }

        const hashedPass = await bcrypt.hash(data.password, salt);
        data.password = hashedPass;

        const savedAdmin = await adminDAL.register(data);
        console.log(savedAdmin);
        return savedAdmin;
        
    } catch (error) {
        // console.log(error);
        throw error
    }
}

const login = async (data) => {
    try {
        
        const admin = await adminDAL.findAdminByEmail(data);
        
        if (!admin)
            throw errorHandler(400, "No user with given email.");
            
        const isCorrect = await bcrypt.compare(data.password, admin.password);  

        if (!isCorrect)
            throw errorHandler(401, "invalid credantials");

        const token = jwt.sign(
            {id: admin._id, email: admin.email},
            process.env.SECRET,
            { expiresIn: '2d' },
        );

        return token;   

    } catch (error) {
        throw error;
    }
}

const approveReqest = async (data) => {
    try {
        
    } catch (error) {
        
    }
}

const adminService = { register, login }

export default adminService;