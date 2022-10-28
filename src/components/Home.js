import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Img2 from '../assets/images/travel-2.jpg';

function Home() {
    return(
        <section>
            <Container id="jumbotron">
                <Row>
                    <Image id="imgOne" src={Img2}></Image>
                </Row>
            </Container>
        </section>
    )
}

export default Home;