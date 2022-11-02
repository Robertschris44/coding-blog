import React from "react";
import { Form, Button, Checkbox, Grid, Input, Icon, Image } from "semantic-ui-react";

function Contact() {
    return(
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                                <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                                <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                                <Input iconPosition='left' placeholder='Email'>
                                    <input placeholder="email" />
                                    <Icon name='at' />
                                </Input>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                            <Button type='submit' primary>Submit</Button>
                    </Form>
                </Grid.Column>
                <Grid.Column id="commentCol" width={8}>
                    <h5>Contact Us</h5>
                    <Form.TextArea id="commentArea" placeholder='Tell us about yourself or how we can help...' />
                </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row> */}
        </Grid>
    )
}

export default Contact;