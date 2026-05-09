import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

// Demo users database (in-memory)
const users: any[] = [
  {
    id: '1',
    fullName: 'Demo User',
    email: 'admin@tripnest.ai',
    password: '$2b$10$YourHashedPasswordHere', // password123
    phone: '+1234567890',
    travelStyle: 'Adventure',
    budgetRange: '$700 - $1500',
    createdAt: new Date(),
  },
];

// Register
export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phone, travelStyle, budgetRange } = req.body;

    // Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide all required fields',
      });
    }

    // Check if user exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'User already exists with this email',
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = {
      id: String(users.length + 1),
      fullName,
      email,
      password: hashedPassword,
      phone: phone || '',
      travelStyle: travelStyle || 'Beach',
      budgetRange: budgetRange || 'Under $300',
      createdAt: new Date(),
    };

    users.push(newUser);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: {
        user: userWithoutPassword,
        token: 'demo-jwt-token-' + newUser.id,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error during registration',
    });
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, rememberMe } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide email and password',
      });
    }

    // Demo login - accept any credentials for demo
    const demoUser = {
      id: '1',
      fullName: 'Demo User',
      email: email,
      phone: '+1234567890',
      travelStyle: 'Adventure',
      budgetRange: '$700 - $1500',
      createdAt: new Date(),
    };

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        user: demoUser,
        token: 'demo-jwt-token-' + demoUser.id,
        rememberMe: rememberMe || false,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error during login',
    });
  }
};

// Forgot Password
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide email address',
      });
    }

    // Demo response
    res.status(200).json({
      status: 'success',
      message: 'Password reset link sent to your email',
      data: {
        email,
        resetToken: 'demo-reset-token-' + Date.now(),
      },
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error during password reset',
    });
  }
};
