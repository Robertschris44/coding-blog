import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

function Home() {
  const {
    loading,
    data: { getBlogs: blogs },
  } = useQuery(FETCH_BLOGS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1> Recent Blogs</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Blogs ..</h1>
        ) : (
          blogs &&
          blogs.map((blog) => (
            <Grid.Column key={blog.id} style={{ marginBottom: 20 }}>
              <PostCard blog={blog} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_BLOGS_QUERY = gql`
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

export default Home;
