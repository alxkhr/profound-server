const express = require('express');
const pg = require('pg');
const app = express();
const port = process.env.PORT || 8080;
const pgAcc = 'postgres://ffznakpyslprec:d20bf2c4d028e8cae4e6e6f144f3abeb1cb51406978b6cdb7fa34bf24180e1f3@ec2-54-75-229-201.eu-west-1.compute.amazonaws.com/db0gnnectermmq';

const amountOfFliersToReturn = 3;

app.get('/discover', (request, response) => {
  pg.connect(pgAcc, function (err, client, done) {
    if (err) {
      return console.error('Could not connect to database.', err)
    }
    client.query('SELECT name, color FROM profiles', null, function (err, result) {
      done();
      if (err) {
        return console.error('Error in query.', err)
      }
      const temp = result.rows.slice(); // TODO is this needed for immutability?
      const fliers = [];
      let i = 0;
      while (i < amountOfFliersToReturn) {
        const randomIndex = Math.floor(Math.random() * temp.length);
        fliers.push(temp[randomIndex]);
        temp.splice(randomIndex, 1)
        i++;
      }
      response.json({ fliers });
    });
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('some error happened', err);
  }
  console.log(`server is listening on ${port}`);
});
