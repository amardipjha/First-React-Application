import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container ,CardFooter,
  } from 'reactstrap';
const Course = ({ course }) =>{
    return(
        <Container>
            <Card className="text-center">
            
                <CardBody>
                    <CardTitle className="font-weight-bold" >{course.title}</CardTitle>
                    <CardText>{ course.description }</CardText>
                    <Button outline color="warning">Click Here!</Button>
                </CardBody>
        
            </Card>
        </Container>
    );

}

export default Course;