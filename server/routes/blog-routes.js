import express from 'express';
import {getBlogs} from "../schemas/resolvers/blogs"
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", addBlog);

export default blogRouter;