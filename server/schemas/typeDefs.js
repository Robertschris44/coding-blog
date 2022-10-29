const { gql } = require("apollo-server");

const typeDefs = gql`
  type Blog {
    id: ID!
    description: String!
    createdAt: String!
    authorName: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    authorName: String!
    body: String!
  }

  type Like {
    id: ID!
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
    createComment(blogId: String!, body: String!): Blog!
    deleteComment(blogId: ID!, commentId: ID!): Blog!
    likeBlog(blogId: ID!): Blog!
  }
`;
module.exports = typeDefs;
