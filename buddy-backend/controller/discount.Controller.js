import DiscountTypes from "../model/product.Model.js";
import { getAllDiscounts, getDiscountCodeById } from "../DAL/discount.DAL.js";

// Get all discounts, coupons, and URL discounts
export const getAllProducts = async (req, res) => {
    try {
        const discounts = await getAllDiscounts();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get coupon code by ID
export const getCouponCode = async (req, res) => {
    try {
        const { id } = req.params;
        const code = await getDiscountCodeById(id);
        if (!code) {
            return res.status(404).json({ message: "Coupon not found" });
        }
        res.status(200).json({ code });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
