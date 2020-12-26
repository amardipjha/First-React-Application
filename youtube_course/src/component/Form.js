import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Container } from 'reactstrap';

const Message=() =>{
    return(
        <>
            <Container>
                <h2 className="bg-primary , text-center ">Costomer Details:</h2>
            <Form>
                <FormGroup>
                    <Label for="emailid">Email</Label>
                    <Input type="Email" placeholder="Enter Email-Id." id="email" />
                </FormGroup>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type="text" placeholder="Enter Name." id="name" />
                </FormGroup>
                <FormGroup>
                    <Label>Message</Label>
                    <Input type="textarea" placeholder="Type Here." id="massage" />
                </FormGroup>
                <Button outline color="warning" className="">Submit</Button>
            </Form>
            </Container>
        </>
    );
}
export default Message;