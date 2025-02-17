import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import DiscountTypes from '../model/product.Model.js';
// const Coupon = mongoose.model('Coupon', couponSchema);

const Coupon = DiscountTypes.Coupon;

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://neel:h6yoMVxNBiBfpqOl@cluster0.iavsk.mongodb.net/buddy-deals', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Generate dummy data
const generateDummyData = () => {
    const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Beauty'];
    const products = ['Laptop', 'Shirt', 'Sofa', 'Novel', 'Lipstick', 'Phone', 'Watch'];

    return Array.from({ length: 50 }, () => {
        const totalCoupons = faker.number.int({ min: 50, max: 500 });
        return {
            name: [{ name: faker.commerce.productName(), isUsed: false }],
            description: faker.commerce.productDescription(),
            discount: faker.number.int({ min: 5, max: 90 }),
            startDate: faker.date.soon(),
            endDate: faker.date.future(),
            category: faker.helpers.arrayElements(categories, faker.number.int({ min: 1, max: 3 })),
            products: faker.helpers.arrayElements(products, faker.number.int({ min: 1, max: 5 })),
            company: faker.company.name(),
            images: Array.from({ length: 3 }, () => faker.image.url()),
            totalCoupons,
            remainingCoupons: faker.number.int({ min: 0, max: totalCoupons }),
        };
    });
};

// Insert dummy data into MongoDB
const seedDatabase = async () => {
    try {
        const dummyData = generateDummyData();
        await Coupon.insertMany(dummyData);
        console.log('50 dummy coupons inserted successfully!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error inserting dummy data:', err);
        mongoose.connection.close();
    }
};

seedDatabase();