import { Router } from 'express';
import { register, login, forgotPassword } from '../controllers/auth.controller';

const router = Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;
