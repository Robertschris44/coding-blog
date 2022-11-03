<<<<<<< HEAD
import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";

import { Container, Divider, Grid, Header, Image, List, Menu, Segment, Dropdown, } from 'semantic-ui-react';
import Login from "./Login";
import Register from "./Register";



=======
import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";
>>>>>>> main

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
<<<<<<< HEAD
    <div>

<Register />

      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as='a' header>
            Tech Blog!
          </Menu.Item>
          <Menu.Item as='a'>Home Page</Menu.Item>

          <Dropdown item simple text= 'Register'>
            <Dropdown.Menu>
              <Dropdown.Item>Login</Dropdown.Item>
              <Dropdown.Item>Create Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>HomePage</Header>
        <p>Welcome to TechBlog</p>
        <p>Here people in Tech all over the world can share ideas, insights, and connect with each other</p>
      </Container>

      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em'}}>
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Creators' />
              <List link inverted>
                <List.Item as='a'>Chris</List.Item>
                <List.Item as='a'>Sumit</List.Item>
                <List.Item as='a'>Damian</List.Item>
                <List.Item as='a'>Chip</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='GitHub Links' />
              <List link inverted>
                <List.Item href="https://github.com/Robertschris44" as='a'>Chris</List.Item>
                <List.Item href="https://github.com/sumitsann" as='a'>Sumit</List.Item>
                <List.Item href="https://github.com/damiandlg" as='a'>Damian</List.Item>
                <List.Item href="http://github.com/ChipHvzvrd" as='a'>Chip</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Tech Blog' />
              <p>
                Here you are safe to post your blogs and engage with other users!
              </p>
            </Grid.Column>
          </Grid>
        </Container>
        
      </Segment>

     

      
  

    </div>
    
=======
    <Grid columns={3}>
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
>>>>>>> main
  );
}

export default Home;
