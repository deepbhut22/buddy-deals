import express from "express";
import { getAllProducts, getCouponCodeByIdController, getDiscountCodeByIdController } from "../controller/discount.Controller.js";

const discountRouter = express.Router();

// Route to get all discounts, coupons, and URL discounts
discountRouter.get("/products", getAllProducts);

// Route to get coupon code by ID
discountRouter.get("/products/discount/:id", getDiscountCodeByIdController);
discountRouter.get("/products/coupon/:id", getCouponCodeByIdController);

export default discountRouter;
