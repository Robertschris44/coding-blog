import express from 'express';
import Login from '../schemas/resolvers/authors';
import { getAllAuthor, signup } from '../schemas/resolvers/authors';

const router = express.Router();

router.get("/". getAllAuthor);
router.post("/signup", signup);
router.post("/login", Login);
export default router;