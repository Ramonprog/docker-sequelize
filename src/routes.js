import express from 'express';
import UserController from './controllers/userController.js';

const userController = new UserController();
const router = express.Router();

router.post('/user', userController.createUser);


export default router;
