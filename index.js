const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const amountOfFliersToReturn = 3;

const exampleFliers = [
  {text: 'Alex', bColor: 'red'},
  {text: 'Eli', bColor: 'purple'},
  {text: 'Andi', bColor: 'green'},
  {text: 'Basti', bColor: 'blue'},
  {text: 'Peter', bColor: 'cyan'},
  {text: 'Maksim', bColor: 'orange'},
  {text: 'Julia', bColor: 'yellow'},
];

function randomFliers() {
  const temp = exampleFliers.slice();
  const ret = [];
  let i = 0;
  while (i < amountOfFliersToReturn) {
    const randomIndex = Math.floor(Math.random() * temp.length);
    ret.push(temp[randomIndex]);
    temp.splice(randomIndex, 1)
    i++;
  }
  return ret;
}

app.get('/', (request, response) => {
  response.json({ fliers: randomFliers() });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('some error happened', err);
  }

  console.log(`server is listening on ${port}`);
});
