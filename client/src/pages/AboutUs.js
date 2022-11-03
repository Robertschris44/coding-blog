import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Sumit from '../assets/images/Group-Pics/Sumit.jpg';
import Chris from '../assets/images/Group-Pics/Chris.jpeg';
import Damien from '../assets/images/Group-Pics/Damien.png';
import Chip from '../assets/images/Group-Pics/Chip.jpeg';
function AboutUs() {
    return(
        <Container>
        <Grid id="aboutGrid" stackable>
        <Grid.Row id="con-image-row">
        <Grid.Column width={8}>
            <Image id="con-image" src={Sumit} alt="programmer-sumit" />
            <a href="https://github.com/sumitsann"><h1>Sumit</h1></a>
        </Grid.Column>
        <Grid.Column width={8}>    
            <h2>Back End Developer</h2>
            <ul>
                <li>React-Router</li>
                <li>Graphql</li>
                <li>ApolloServer</li>
                <li>MongoDb</li>
            </ul>
        </Grid.Column>
        <Grid.Column width={8}>
            <Image id="con-image" src={Chris} />
            <a href="https://github.com/Robertschris44"><h1>Chris</h1></a>
        </Grid.Column>
        <Grid.Column width={8}>
        <h2>Front End Developer</h2>
            <ul>
                <li>Semantic UI</li>
                <li>Reactjs</li>
                <li>Graphql</li>
                <li>ApolloClient</li>
            </ul>
        </Grid.Column>
        <Grid.Column width={8}>
            <Image id="con-image" src={Damien} />
            <a href="https://github.com/damiandlg"><h1>Damien</h1></a>
        </Grid.Column>
        <Grid.Column width={8}>
            <h2>Back End Developer</h2>
            <ul>
                <li>React-Router</li>
                <li>Graphql</li>
                <li>ApolloServer</li>
                <li>MongoDb</li>
            </ul>
        </Grid.Column>
        <Grid.Column width={8}>
            <Image id="con-image" src={Chip} />
            <a href="https://github.com/ChipHvzvrd"><h1>Chip</h1></a>
        </Grid.Column>
        <Grid.Column width={8}>
            <h2>Front End Developer</h2>
            <ul>
                <li>Semantic UI</li>
                <li>Reactjs</li>
                <li>Graphql</li>
                <li>ApolloClient</li>
            </ul>
        </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
    )
}

export default AboutUs;