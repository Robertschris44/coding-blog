const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers/index");
const Blog = require("./models/Blog");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  });
