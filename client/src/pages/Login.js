import React, { useState } from "react";
import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
// import { useMutation } from '@apollo/react-hooks'




function Login() {
  const [formState, setFormState] = useState({ email: '', password: ''});

  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <Grid textAlign="center" style={{ height: '100vh'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header>
          Log-in to your account!
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' 
            iconPosition="left" 
            onChange={handleFormSubmit}
            placeholder="E-mail address" />
            <Form.Input
            fluid
            icon='lock'
            iconPosition="left"
            placeholder='Password'
            type="password"
            onChange={handleChange}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New here? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
