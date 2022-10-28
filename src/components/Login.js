import { Container, Button, Form } from 'react-bootstrap';

function LoginForm() {
  return (
    <Container>
        <div id="welcome">
            <h3>Welcome to Travelogr!</h3>   
            <p>A site to share, explore, and conversate over exciting travel destinations!</p> 
        </div>
        <Form id="loginForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control id="formInput" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control id="formInput" type="password" placeholder="Password" />
                </Form.Group>
            <Button id="subBtn" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}

export default LoginForm;