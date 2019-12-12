import React from "react";
import "../public/stylesheets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Cards from "../components/Cards";
import Navigation from '../components/Navigation';
import Weather from "../components/Weather";


const Index = () => (
  <>
  <Navigation></Navigation>
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
  