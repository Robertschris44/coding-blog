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
  },
};
