import { getAllDiscounts, getCouponCodeById } from "../DAL/discount.DAL.js";
import { getDiscountCodeById } from "../DAL/discount.DAL.js";

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
export const getDiscountCodeByIdController = async (req, res) => {
    try {
        // console.log("here");        
        const { id } = req.params;
        // console.log(id);
        
        const code = await getDiscountCodeById(id);

        // console.log(code);
        
        if (!code) {
            return res.status(404).json({ message: "Coupon not found" });
        }
        res.status(200).json({ code });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCouponCodeByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const code = await getCouponCodeById(id);
        res.status(200).json({ code });
    } catch (error) {
        console.log(error);
        throw errorHandler(500, error.message);
    }
};
