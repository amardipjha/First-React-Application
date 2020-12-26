import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link } from "react-router-dom";

const Menu =() => {

    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link  className="list-group-item list-group-item-action" tag="a" to="/courses">Courses</Link> 
            <Link  className="list-group-item list-group-item-action" tag="a" to="/contact-us">Contact Us</Link> 
        </ListGroup>


    );
}

export default Menu;