const blogsResolvers = require("./blogs");
const authorsResolvers = require("./authors");

module.exports = {
  Query: {
    ...blogsResolvers.Query,
  },
  Mutation: {
    ...authorsResolvers.Mutation,
    ...blogsResolvers.Mutation,
  },
};
