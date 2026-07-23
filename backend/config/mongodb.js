import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Listen for successful connection
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        
        // Listen for errors after initial connection
        mongoose.connection.on('error', (err) => console.log("Database Error:", err));
         console.log("URI:",process.env.MONGODB_URI);
         
        // Attempt to connect
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error.message);
    }
}

export default connectDB;