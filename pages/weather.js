import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fetch from 'isomorphic-unfetch';

var lat = "32.3";
var long = "32.23";



const weather = props => (
	
<>
    <Navigation></Navigation>
    <h1 style={{textAlign: "center"}}>Weather</h1>
    <hr></hr>
	<Container>
		<Row>
		<Form.Label>Place:</Form.Label>
			<Col>
				<Form.Group controlId="lat">
					<Form.Control type="text" placeholder="City" />
					<button data-input="#id-input" onClick={(e)=>this.saveKonfigElementHandler(e)}>Search</button>
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
   
    
</>

);



weather.getInitialProps = async function() {
	const res = await fetch(`https://api.darksky.net/forecast/4d821870011e1fdaf2e87a6c90a52d74/${lat},${long}`, {
		"method": "GET",
		"headers": {
			"key": "4d821870011e1fdaf2e87a6c90a52d74"
		}
	});
	const Weatherdata = await res.json();

	console.log(`Logged Data: ${Weatherdata}`);

	return{
		weather: Weatherdata.currently
	};
};

// weather.getInitialProps = async function() {
// 	const res = await fetch(`https://api.geocod.io/v1.4/geocode?q=1109+N+Highland+St%2c+Arlington+VA&api_key=YOUR_API_KEY`);
// 	const Locationdata = await res.json();

// 	console.log(`Logged Data: ${Locationdata}`);

// 	return{
// 		lat: Locationdata.results.lat,
// 		long: Locationdata.results.lng
// 	};
// };
export default weather;