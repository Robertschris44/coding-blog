import gql from "graphql-tag";

export const FETCH_BLOGS_QUERY = gql`
  {
    getBlogs {
      description
      createdAt
      id
      authorName
      likeCount
      commentCount
      comments {
        authorName
        body
        createdAt
      }
      likes {
        authorName
        createdAt
      }
    }
  }
`;
