import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: [4, "Username must be at least 3 characters long"],
            maxlength: [20, "Username must be at most 20 characters long"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: [7, "Email must be at least 4 characters long"],
            maxlength: [28, "Email must be at most 20 characters long"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"],
            maxlength: [20, "Password must be at most 20 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);

