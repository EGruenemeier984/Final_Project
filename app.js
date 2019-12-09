const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res, next) => {
      return handle(req, res);
    });

    server.use('/public', express.static(path.join(__dirname, 'public'),{
      
    }))

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("Server is up on 3000, BRO");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  })