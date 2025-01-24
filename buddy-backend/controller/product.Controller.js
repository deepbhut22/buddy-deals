import DiscountTypes from "../model/product.Model";

const getAllProducts = async (req, res) => {
    try {
        const discount = await DiscountTypes.Discount.find({}).select('-name');
        const coupons = await DiscountTypes.Coupon.find({}).select('-name');
        const urls = await DiscountTypes.UrlDiscount.find({}).select('-url');

        res.status(200).json({
            success: true,
            discount,
            coupons,
            urls
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const productController = {
    getAllProducts,
}

export default productController;