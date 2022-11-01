import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
import { Container, Divider, Grid, Header, Image, List, Menu, Segment, Dropdown, } from 'semantic-ui-react';
import Login from "./Login";





function Home() {
  //   const { loading, data } = useQuery(FETCH_BLOGS_QUERY);
  //   if (data) {
  //     console.log(data);
  //   }
  return (
    <div>
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
    
  );
}

// const FETCH_BLOGS_QUERY = gql`
//   {
//     getBlogs {
//       id
//       description
//       createdAt
//       authorName
//       commentCount
//       comments {
//         id
//         body
//         authorName
//       }
//       likeCount
//       likes {
//         authorName
//       }
//     }
//   }
// `;

export default Home;
