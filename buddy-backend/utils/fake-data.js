import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

// Your updated schema
const urlDiscountSchema = new mongoose.Schema({
    url: { type: String, required: true },
    discount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    category: { type: [String], required: true },
    company: { type: String, required: true },
    images: { type: [String], required: true },
    totalCoupons: { type: Number, required: true },
    remainingCoupons: { type: Number, required: true },
});

const UrlDiscount = mongoose.model('UrlDiscount', urlDiscountSchema);

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/your_database_name', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Generate dummy data
const generateDummyData = () => {
    const categories = ['Electronics', 'Clothing', 'Home', 'Books', 'Beauty'];

    return Array.from({ length: 50 }, () => {
        const totalCoupons = faker.number.int({ min: 50, max: 500 });
        return {
            url: faker.internet.url(),
            discount: faker.number.int({ min: 5, max: 90 }), // Discount in percentage
            startDate: faker.date.soon(),
            endDate: faker.date.future(),
            category: faker.helpers.arrayElements(categories, faker.number.int({ min: 1, max: 3 })),
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
        await UrlDiscount.insertMany(dummyData);
        console.log('50 dummy URL discounts inserted successfully!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error inserting dummy data:', err);
        mongoose.connection.close();
    }
};

seedDatabase();
