const Blog = require("../../models/Blog");

module.exports = {
  Query: {
    async getBlogs() {
      try {
        const blogs = await Blog.find();
        return blogs;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getBlog(_, { blogId }) {
      try {
        const blog = await Blog.findById(blogId);

        if (blog) {
          return blog;
        } else {
          throw new Error("Blog not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
