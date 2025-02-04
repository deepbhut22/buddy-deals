import express from "express";
import cors from "cors";
import adminRouter from "./router/admin.Route.js";
import connectDB from './config/db.Config.js'
import userRequestRouter from "./router/userRequest.Route.js";
import userRouter from "./router/user.Router.js";
import discountRouter from "./router/discount.Route.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser())

connectDB();


app.use("/api/v1/user-requests", userRequestRouter); 
app.use("/api/v1/user-auth", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/discounts", discountRouter);

app.use((err, req, res, next) => {
    const statusCode = err.code || 500;
    const errMsg = err.message || "Internal Server Errorrrr....";

    res.status(statusCode).json({
        success: false,
        message: errMsg,
    });
})



app.listen(5000, () => console.log("server running on port 5000"));