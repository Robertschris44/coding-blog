import React from "react";
import { Button, Checkbox, Form, Grid } from "semantic-ui-react";
import Header from "../components/Header";

function Register() {
  return (
    <div>
      <Grid>
        <Grid.Column>
          <Header>

          </Header>
        </Grid.Column>
      </Grid>





    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
    
      <Button type="submit">Submit</Button>

    </Form>
    </div>
  );
}

export default Register;
