import React from "react";
import "../public/stylesheets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Footer from '../components/footer';
import Cards from "../components/Cards";

const Index = () => (
  <>
  <Navbar  bg="light" expand="lg">
  <Navbar.Brand href="#home">Cruise Lookup</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Ships</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Port Schedules</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Itineraries</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">How busy is the Port?</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
  <Jumbotron>
  <h1>Welcome to Cruise Lookup</h1>
  <p>
    Look up Cruise Itineraries, see ship information, and even find out how busy your ports will be.
  </p>
  <p>
    <Button variant="primary">Find my Cruise</Button>
  </p>
  </Jumbotron>

  <Cards></Cards>

  <Footer></Footer>
  </>
  )
  export default Index;
  