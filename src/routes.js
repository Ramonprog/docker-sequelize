import express from 'express';
import UserController from './controllers/userController.js';

const userController = new UserController();
const router = express.Router();

router.get('/user', userController.getAllUsers);
router.post('/user', userController.createUser);
router.delete('/user', userController.deleteUser);


export default router;
