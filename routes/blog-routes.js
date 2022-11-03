import express from 'express';
import {getBlogs} from "../client/src/pages/Home"
import FETCH_BLOGS_QUERY from 
const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);

export default blogRouter;