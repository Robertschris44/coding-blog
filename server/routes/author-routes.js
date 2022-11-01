import express from 'express';
import Login from '../../client/src/pages/Login';
import { getAllAuthor, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/". getAllAuthor);
router.post("/signup", signup);
router.post("/login", Login);
export default router;