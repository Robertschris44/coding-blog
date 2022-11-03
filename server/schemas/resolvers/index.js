const blogsResolvers = require("./blogs");
const authorsResolvers = require("./authors");
const commentsResolvers = require("./comments");

module.exports = {
  Blog: {
    likeCount(parent) {
      console.log(parent);
      return parent.likes.length;
    },
    commentCount(parent) {
      console.log(parent);
      return parent.comments.length;
    },
  },
  Query: {
    ...blogsResolvers.Query,
  },
  Mutation: {
    ...authorsResolvers.Mutation,
    ...blogsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
