import express from 'express';
import { getAllAuthor, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/". getAllUser);
router.post("/login", signup);
export default router;