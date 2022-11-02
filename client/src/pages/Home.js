import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_BLOGS_QUERY } from "../util/graphql";

function Home() {
  const { author } = useContext(AuthContext);
  const {
    loading,
    data: { getBlogs: blogs },
  } = useQuery(FETCH_BLOGS_QUERY);

  return (
    <Container>
    <Grid columns={3} stackable>
      <Grid.Row>
        <h1> Recent Blogs</h1>
      </Grid.Row>
      <Grid.Row>
        {author && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
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
    </Container>
  );
}

export default Home;
