import adminService from "../service/admin.Service.js"
import { errorHandler } from "../utils/errorHandler.js";

const adminRegister = async (req, res, next) => {
    try {

        if (!req.body.email || !req.body.password)
            throw errorHandler(400, "'email' and 'password' are required properties.")

        const savedUser = await adminService.register({
            email: req.body.email,
            password: req.body.password,
        });
        if (savedUser) {
            res.status(200).json({
                message: "You have successfully been registered"
            });
        }
    } catch (error) {
        next(error);
        // console.log(error);
    }
}

const adminLogin = async (req, res, next) => {
    try {
        const token = await adminService.login({
            email: req.body.email,
            password: req.body.password,
        });

        res.cookie('authToken', token, {
            httpOnly: true,
            serure: true,
            maxAge: 2 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ message: "Successfully Logged in!!" });
        
    } catch (error) {
        next(error);
    }
}

const approveReqest = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

const adminController = { adminRegister, adminLogin };
export default adminController;

