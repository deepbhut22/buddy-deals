import express from "express";
import cors from "cors";
import adminRouter from "./router/admin.Route.js";
import connectDB from './config/db.Config.js'
import userRequestRouter from "./router/userRequest.Route.js";
const app = express();

app.use(cors());

app.use(express.json());

connectDB();


app.use("/api/v1/user-requests", userRequestRouter); 
app.use("/api/v1/admin", adminRouter);

app.use((err, req, res, next) => {
    const statusCode = err.code || 500;
    const errMsg = err.message || "Internal Server Errorrrr....";

    res.status(statusCode).json({
        success: false,
        message: errMsg,
    });
})



app.listen(5000, () => console.log("server running on port 5000"));