"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
// Load environment variables
dotenv_1.default.config();
// Connect to MongoDB
(0, database_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
app.use('/api/auth', auth_routes_1.default);
app.use('/api/users', user_routes_1.default);
// Health check
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'success',
        message: 'TripNest AI Backend is running!',
        timestamp: new Date().toISOString(),
    });
});
// 404 handler
app.use((_req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found',
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV}`);
});
exports.default = app;
