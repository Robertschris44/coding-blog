const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Blog = require("./models/Blog");
const { MONGODB } = require("./config.js");

const typeDefs = gql`
  type Blog {
    id: ID!
    description: String!
    createdAt: String!
    authorName: String!
  }
  type Query {
    getBlogs: [Blog]
  }
`;

const resolvers = {
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  });
