import React from "react";
import logo from './logo.svg';
import './App.css'; 

import Header from "./component/Header";
import {Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Course from './component/Course';
import Allcourse from './component/Allcourse';
import Message from './component/Form';
import Menu from './component/Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  

function App() 
{ 
  return (
  <>
  <Router>

                     <Header />

  <Container>
  <Row>
    <Col md={8}>
      <Route path="/" component={Home} exact />
      <Route path="/courses"  component={Allcourse} exact />
      <Route path="/contact-us"  component={Message} exact />
    </Col>
    <Col md={4}>         <Menu />      </Col>
  </Row>
  </Container>

  </Router>
   
  </>
  
  );
}

export default App;
