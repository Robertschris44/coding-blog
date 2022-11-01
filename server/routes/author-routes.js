import express from 'express';
import { getAllAuthor, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/". getAllAuthor);
router.post("/login", signup);
export default router;