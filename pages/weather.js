import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import fetch from 'isomorphic-unfetch';

var lat = "32.3";
var long = "32.23";

const weather = props => (
<>
    <Navigation></Navigation>
    <h1 style={{textAlign: "center"}}>Weather</h1>
    <hr></hr>
    <Form.Control type="text" placeholder="Normal text" />
    <h3>Temperature</h3>
    <h4>{props.weather.temperature}</h4>
    
</>
);

weather.getInitialProps = async function() {
	const res = await fetch(`https://api.darksky.net/forecast/4d821870011e1fdaf2e87a6c90a52d74/${lat},${long}`, {
		"method": "GET",
		"headers": {
			"key": "4d821870011e1fdaf2e87a6c90a52d74"
		}
	});
	const data = await res.json();

	console.log(`Logged Data: ${data}`);

	return{
		weather: data.currently
	};
};
export default weather;