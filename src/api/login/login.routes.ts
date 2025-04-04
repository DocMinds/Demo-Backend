import { Router } from 'express';
import { userLogin, userRegister, userResetPassword, userChangePassword, getUserDetails, deleteUserByUsername, getAllUsers } from './login.controller';
import { authenticateToken } from '../../middleware/middleware';
const router = Router();

router.post('/login', userLogin);
router.post('/register', userRegister);
router.post('/reset-password',authenticateToken, userResetPassword);
router.post('/change-password', authenticateToken,userChangePassword);
router.get('/user-details', authenticateToken, getUserDetails); // Protected route
router.get('/get-all-users', authenticateToken, getAllUsers); // Protected route

router.delete('/delete-user/:username', authenticateToken, deleteUserByUsername);

export default router;

