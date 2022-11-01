const { AuthenticationError, UserInputError } = require("apollo-server");
const Blog = require("../../models/Blog");

const checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    createComment: async (_, { blogId, body }, context) => {
      const { authorName } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not empty",
          },
        });
      }

      const blog = await Blog.findById(blogId);

      if (blog) {
        blog.comments.unshift({
          body,
          authorName,
          createdAt: new Date().toISOString(),
        });
        await blog.save();
        return blog;
      } else throw new UserInputError("Blog not found");
    },
    async deleteComment(_, { blogId, commentId }, context) {
      const { authorName } = checkAuth(context);

      const blog = await Blog.findById(blogId);

      if (blog) {
        const commentIndex = blog.comments.findIndex((c) => c.id === commentId);

        if (blog.comments[commentIndex].authorName === authorName) {
          blog.comments.splice(commentIndex, 1);
          await blog.save();
          return blog;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
