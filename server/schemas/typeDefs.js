const { gql } = require("apollo-server");

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
module.exports = typeDefs;
