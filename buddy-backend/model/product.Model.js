import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        // it will be in percentage
    },
    startDate: {
        type: Date,
        required: true,
        // default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
        // default: Date.now,
    },  
    category: {
        type: [String],
        required: true,
    },
    products: {
        type: [String],
        default: null,
    },
    company: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    remainingCoupons: {
        type: Number,
        required: true,
    },
    totalCoupons: {
        type: Number,
        required: true,
    },
});

const couponSchema = new mongoose.Schema({
    name: {
        type: [{
            name: {
                type: String,
                required: true,
            },
            isUsed: {
                type: Boolean,
                default: false,
            }
        }],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        // it will be in percentage
    },
    startDate: {
        type: Date,
        required: true,
        // default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
        // default: Date.now,
    },  
    category: {
        type: [String],
        required: true,
    },
    products: {
        type: [String],
        default: null,
    },
    company: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    remainingCoupons: {
        type: Number,
        required: true,
    },
    totalCoupons: {
        type: Number,
        required: true,
    },
});

const urlDiscountSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        // it will be in percentage
    },
    startDate: {    
        type: Date,
        required: true,
        // default: Date.now,    
    },
    endDate: {
        type: Date,
        required: true,
        // default: Date.now,
    },  
    category: {
        type: [String],
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    totalCoupons: {
        type: Number,
        required: true,
    },
    remainingCoupons: {
        type: Number,
        required: true,
    }
});

const Discount = mongoose.model('Discount', discountSchema);
const Coupon = mongoose.model('Coupon', couponSchema);
const UrlDiscount = mongoose.model('UrlDiscount', urlDiscountSchema);

const DiscountTypes = {
    Discount,
    Coupon,
    UrlDiscount,
};

export default DiscountTypes;