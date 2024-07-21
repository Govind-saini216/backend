import express from 'express';
import Controller from '../controller/usercontroller.js';
import { Authenciate } from '../middlewears/Auth.js';

const router = express.Router();

router.post('/register', Controller.Register);
router.post('/login', Controller.login);
router.get('/user', Authenciate, Controller.profile)


export default router;