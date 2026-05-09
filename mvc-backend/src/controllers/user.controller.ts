import { Request, Response } from 'express';

// Get user profile
export const getProfile = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error while fetching profile',
    });
  }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error while updating profile',
    });
  }
};
