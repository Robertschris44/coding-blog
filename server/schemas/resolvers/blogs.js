const { AuthenticationError, UserInputError } = require("apollo-server");
const { argsToArgsConfig } = require("graphql/type/definition");

const Blog = require("../../models/Blog");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getBlogs() {
      try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
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

      if (description.trim() === "") {
        throw new Error("Blog description must not be empty.");
      }

      const newBlog = new Blog({
        description,
        author: author.id,
        authorName: author.authorName,
        createdAt: new Date().toISOString(),
      });
      const blog = await newBlog.save();

      return blog;
    },
    async deleteBlog(_, { blogId }, context) {
      const author = checkAuth(context);
      console.log(author);

      try {
        const blog = await Blog.findById(blogId);
        if (author.authorName === blog.authorName) {
          await blog.delete();
          return "Blog deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async likeBlog(_, { blogId }, context) {
      const { authorName } = checkAuth(context);

      const blog = await Blog.findById(blogId);
      if (blog) {
        if (blog.likes.find((like) => like.authorName === authorName)) {
          // Blog already likes, unlike it
          blog.likes = blog.likes.filter(
            (like) => like.authorName !== authorName
          );
          await blog.save();
        } else {
          //Not liked, like blog
          blog.likes.push({
            authorName,
            createdAt: new Date().toISOString(),
          });
        }
        await blog.save();
        return blog;
      } else throw new UserInputError("Post not found");
    },
  },
};
