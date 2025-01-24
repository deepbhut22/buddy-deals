import DiscountTypes from "../model/product.Model.js";

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
    const coupon = await DiscountTypes.Coupon.findOne({ _id: id, "name.isUsed": false }); // Find the coupon with at least one unused code

    if (coupon) {
        // Find the first unused code in the 'name' array
        const firstUnusedCode = coupon.name.find((entry) => entry.isUsed === false);

        if (firstUnusedCode) {
            // Mark the coupon code as used
            firstUnusedCode.isUsed = true;
            await coupon.save(); // Save the updated document to the database

            // Return the unused code
            return firstUnusedCode;
        }
    }

    return null; // Return null if no unused code is found
};