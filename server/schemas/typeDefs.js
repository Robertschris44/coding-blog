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
    getBlog(blogId: ID!): Blog
  }

  type Author {
    id: ID!
    email: String!
    token: String!
    authorName: String!
    createdAt: String!
  }

  input RegisterInput {
    authorName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): Author!
    login(authorName: String!, password: String!): Author!
    createBlog(description: String!): Blog!
    deleteBlog(blogId: ID!): String!
  }
`;
module.exports = typeDefs;
