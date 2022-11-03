import React from 'react';
import { Segment, Grid, Container, Header, List } from 'semantic-ui-react';



const Footer = () => {
  return (
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
  )
}

export default Footer