import DiscountTypes from "../model/product.Model.js";
import { errorHandler } from "../utils/errorHandler.js";

// Fetch all discounts, coupons, and URL discounts
export const getAllDiscounts = async () => {
    const discounts = await DiscountTypes.Discount.find().lean();
    const coupons = await DiscountTypes.Coupon.find({}, "-name.name").lean(); // Exclude coupon codes
    const urlDiscounts = await DiscountTypes.UrlDiscount.find().lean();

    return {
        discounts,
        coupons,
        urlDiscounts,
    };
};

export const getDiscountCodeById  = async (id) => {
    const coupon = await DiscountTypes.Discount.findOne({ _id: id, remainingCoupons: { $gt: 0 } });
    // console.log(coupon.name);

    return coupon.name;
};

export const getCouponCodeById = async (id) => {
    try {
        console.log("here");
    
        const coupon = await DiscountTypes.Coupon.findOneAndUpdate(
            { 
                _id: id, 
                "name.isUsed": false, // Ensure at least one is unused,
                remainingCoupons: { $gt: 0 } // and there are remaining coupons
            },
            { 
                $set: { "name.$.isUsed": true }, // Mark first matching coupon as used
                $inc: { remainingCoupons: -1 } // Decrease remainingCoupons count
            },
            { 
                new: true // Return the updated document
            }
        );

        if (!coupon) {
            throw new Error("No available unused coupons.");
        }

        const usedCoupon = coupon.name.find(entry => entry.isUsed === true);

        return usedCoupon.name
    } catch (error) {
        console.log(error);
        throw errorHandler(500, error.message);
    }
};