import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

var lat = "45.12";
var long = "32.23";

function weather (props) {
	const [input, setInput] = useState('');
	return (
		<div>
    <Navigation></Navigation>
    <h1 style={{textAlign: "center"}}>Weather</h1>
    <hr></hr>
	<Container>
		<Row>
		<Form.Label>Place:</Form.Label>
			<Col>
				<Form.Group controlId="lat">
					<Form.Control value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="City" />
					<h3>Results for: {input}</h3>
				</Form.Group>
			</Col>
		</Row>
	</Container>
	<Jumbotron>
		<Container>
			<Row>
				<Col>
					<h3>Temperature</h3>
    				<h5>{props.weather.temperature}&#8457;</h5>
				</Col>

				<Col>
					<h3>Weather Summary</h3>
					<h5>{props.weather.summary}</h5>
				</Col>
				<Col>
					<h3>Stuff to Know</h3>
					<ul>
						<li>Humidity: {Math.round(props.weather.humidity * 100)}%</li>
						<li>Wind Speed: {props.weather.windSpeed} MPH</li>
						<li>Chance of Rain: {Math.round(props.weather.precipProbability * 100)}%</li>
					</ul>
				</Col>
			</Row>
			
		</Container>
		
	</Jumbotron>
</div>
);
}

weather.getInitialProps = async function() {
	const res = await fetch(`https://api.darksky.net/forecast/4d821870011e1fdaf2e87a6c90a52d74/${lat},${long}`);
	const WeatherData = await res.json();

	console.log(`Logged Data: ${WeatherData}`);

	return{
		weather: WeatherData.currently
	};
};

// weather.getInitialProps = async function() {
// 	const res = await fetch(`https://api.geocod.io/v1.4/geocode?q=${input}&api_key=f397a9254f579af259237ddf382a4f43f2323da`);
// 	const LocationData = await res.json();

// 	console.log(`Logged Data: ${LocationData}`);

// 	return {
// 		lat: LocationData.results.lat,
// 		long: LocationData.results.lng
// 	};
// };
export default weather;