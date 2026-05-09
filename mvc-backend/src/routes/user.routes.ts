import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/user.controller';

const router = Router();

// User routes
router.get('/profile/:id', getProfile);
router.put('/profile/:id', updateProfile);

export default router;
