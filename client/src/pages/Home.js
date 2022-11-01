import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { Grid } from "semantic-ui-react";

// import PostCard from '../components/PostCard';

function Home() {
  const { loading, data } = useQuery(FETCH_BLOGS_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h2> Home Page</h2>
    </div>
    // <Grid columns={3}>
    //   <Grid.Row className="page-title">
    //     <h1>Recent Posts</h1>
    //   </Grid.Row>
    //   <Grid.Row>
    //     {loading ? (
    //       <h1>Loading posts..</h1>
    //     ) : (
    //       posts &&
    //       posts.map((post) => (
    //         <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
    //           <PostCard post={post} />
    //         </Grid.Column>
    //       ))
    //     )}
    //   </Grid.Row>
    // </Grid>
  );
}

const FETCH_BLOGS_QUERY = gql`
  {
    getBlogs {
      description
    }
  }
`;

export default Home;
