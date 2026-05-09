"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getProfile = void 0;
// Get user profile
const getProfile = async (req, res) => {
    try {
        const { id } = req.params;
        // Demo user data
        const user = {
            id,
            fullName: 'Demo User',
            email: 'admin@tripnest.ai',
            phone: '+1234567890',
            travelStyle: 'Adventure',
            budgetRange: '$700 - $1500',
            createdAt: new Date(),
        };
        res.status(200).json({
            status: 'success',
            data: { user },
        });
    }
    catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Server error while fetching profile',
        });
    }
};
exports.getProfile = getProfile;
// Update user profile
const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        // Demo response
        const updatedUser = {
            id,
            ...updates,
            updatedAt: new Date(),
        };
        res.status(200).json({
            status: 'success',
            message: 'Profile updated successfully',
            data: { user: updatedUser },
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Server error while updating profile',
        });
    }
};
exports.updateProfile = updateProfile;
