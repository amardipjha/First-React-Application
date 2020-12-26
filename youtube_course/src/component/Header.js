import React from "react";
import { Card, CardBody ,Container} from "reactstrap";

function Header(){

    return(
    <>
    <Container>
    <Card className="my-2 bg-warning">
        <CardBody>
            <h1 className="text-center">Welcome to my FIRST React Js Application.</h1>
        </CardBody>
    </Card>
    </Container>
    </>

    );
}

export default Header;