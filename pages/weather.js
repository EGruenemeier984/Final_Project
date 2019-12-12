import fetch from 'isomorphic-unfetch';

function Weather(props) {
return (
  <div>
    <h1>Weather</h1>
    {props.temp}
  </div>
  )
}

Weather.getInitialProps = async ({ req }) => {
  const key = '4d821870011e1fdaf2e87a6c90a52d74';
  var lat = '37.8262';
  var long ='50.1243';
  const res = await fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}`)
  const json = await res.json()
  console.log(json);
  return { temp: json.timezone } 
}

export default Weather;