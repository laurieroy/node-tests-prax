const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});
// GET route /users array of users
app.get('/users', (req, res) => {
  res.status(200).send([{
      name: 'Laurie',
      age: 99
    }, {
      name: 'Pam',
      age: 44
    },     {
      name: 'Greta',
      age: 11
    }]);
});
// Give users a name prop, age

app.listen(3000);
module.exports.app = app;
