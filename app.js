const express = require("express");
const next = require("next");
const path = require("path");
const axios = require("axios");

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = express();

    server.use('/public', express.static(path.join(__dirname, 'public')));

    server.get('/ships', (req, res) => {
      return app.render(req, res, '/ships', req.query);
    });

    server.get('*', (req, res, next) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("Server is up on 3000, BRO");
      // axiosRequest();
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  })

// function axiosRequest() {
//   const key = '4d821870011e1fdaf2e87a6c90a52d74';
//   var lat = '37.8262';
//   var long ='50.1243';

//   axios({
//       "method": "GET",
//       "url": `https://api.darksky.net/forecast/${key}/${lat},${long}`,
//       "headers": {
//         "content-type": "application/octet-stream",
//         "API_key": "4d821870011e1fdaf2e87a6c90a52d74",
//       },
//       "params": {
//         "lang": "en",
//         "units": "auto"
//       }

//     })
//     .then((response) => {
//       console.log(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }