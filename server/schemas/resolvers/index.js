const blogsResolvers = require("./blogs");
const authorsResolvers = require("./authors");
const commentsResolvers = require("./comments");

module.exports = {
  Query: {
    ...blogsResolvers.Query,
  },
  Mutation: {
    ...authorsResolvers.Mutation,
    ...blogsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
