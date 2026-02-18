import mongoose from "mongoose";

const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully ✅");
    } catch (error) {
        console.log("MongoDB Connection Error");
        console.log(error);
    }
};

export default DB;
