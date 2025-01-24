import express from "express";
import { getAllProducts, getCouponCode } from "../controller/discount.Controller.js";

const discountRouter = express.Router();

// Route to get all discounts, coupons, and URL discounts
discountRouter.get("/products", getAllProducts);

// Route to get coupon code by ID
discountRouter.get("/products/coupon/:id", getCouponCode);

export default discountRouter;
