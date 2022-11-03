const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers/index");
const Blog = require("./models/Blog");
const { MONGODB } = require("./config.js");

const PORT = process.env.port || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
