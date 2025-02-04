import express from "express";
import { getAllProducts, getCouponCodeByIdController, getDiscountCodeByIdController } from "../controller/discount.Controller.js";
import jwt from "jsonwebtoken";


const discountRouter = express.Router();

// Route to get all discounts, coupons, and URL discounts
discountRouter.get("/products", getAllProducts);

discountRouter.use((req, res, next) => {
    try {                
        const token = req.cookies.buddyToken;

        if(!token) {            
            return res.status(401).json({message: "You are not authenticated!"});
        }

        const decoded = jwt.verify(token, process.env.SECRET);
        // console.log(decoded);

        req.userId = decoded.id;
        req.userEmail = decoded.email;
        
        next();
        
    } catch (error) {
        return res.status(401).json({message: "Invalid Token!"});
    }
});

// Route to get coupon code by ID
discountRouter.get("/products/discount/:id", getDiscountCodeByIdController);
discountRouter.get("/products/coupon/:id", getCouponCodeByIdController);

export default discountRouter;
