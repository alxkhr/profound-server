const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
  response.json({ foo: 'bar' });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('some error happened', err);
  }

  console.log(`server is listening on ${port}`);
});
