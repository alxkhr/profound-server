const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const exampleFliers = [
  {text: 'Alex', bColor: 'red'},
  {text: 'Eli', bColor: 'purple'},
  {text: 'Andi', bColor: 'green'},
  {text: 'Basti', bColor: 'blue'},
  {text: 'Peter', bColor: 'cyan'},
  {text: 'Maksim', bColor: 'orange'},
  {text: 'Julia', bColor: 'yellow'}
];

app.get('/', (request, response) => {
  response.json({ fliers: exampleFliers });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('some error happened', err);
  }

  console.log(`server is listening on ${port}`);
});
