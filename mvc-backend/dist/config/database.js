"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        const conn = await mongoose_1.default.connect(mongoURI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📦 Database: ${conn.connection.name}`);
    }
    catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1);
    }
};
// Handle connection events
mongoose_1.default.connection.on('disconnected', () => {
    console.log('⚠️  MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (err) => {
    console.error('❌ MongoDB error:', err);
});
exports.default = connectDB;
