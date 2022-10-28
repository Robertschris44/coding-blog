const { AuthenticationError } = require("apollo-server");

const Blog = require("../../models/Blog");
const checkAuth = require("../../util/check-auth");

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
  Mutation: {
    async createBlog(_, { description }, context) {
      const author = checkAuth(context);
      console.log(author);

      const newBlog = new Blog({
        description,
        author: author.id,
        authorName: author.authorName,
        createdAt: new Date().toISOString(),
      });
      const blog = await newBlog.save();

      return blog;
    },
  },
};
