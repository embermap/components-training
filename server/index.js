/* eslint-env node */

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var jsonApi = require("jsonapi-server");

  jsonApi.setConfig({
    port: 16006
  });

  jsonApi.define({
    resource: "users",
    handlers: new jsonApi.MemoryHandler(),
    attributes: {
      name: jsonApi.Joi.string(),
      email: jsonApi.Joi.string(),
      firstname: jsonApi.Joi.string(),
      lastname: jsonApi.Joi.string()
    },
    examples: [
      {
        id: '1',
        type: 'users',
        email: 'ryanto@gmail.com',
        firstname: 'Ryan',
        lastname: 'Toronto'
      },
      {
        id: '2',
        type: 'users',
        email: 'sam.selikoff@gmail.com',
        firstname: 'Sam',
        lastname: 'Selikoff'
      }
    ]
  });

  jsonApi.start();

  app.get('/weather', function(req, res) {
    setTimeout(() => {
      var temp = Math.floor(Math.random() * 100);
      res.send('' + temp);
    }, 2000);
  });
};
