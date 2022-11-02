import express from 'express';
import {getBlogs} from "../src/pages/Home"
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", addBlog);

export default blogRouter;