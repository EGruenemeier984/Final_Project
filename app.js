const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = express();

    server.use('/public', express.static(path.join(__dirname, 'public')));

    server.get('/weather', (req, res) => {
      return app.render(req, res, '/weather', req.query);
    })

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
