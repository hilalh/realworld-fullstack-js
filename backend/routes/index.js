var router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const pjson = require('../package.json')

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: `${pjson.name.charAt(0).toUpperCase() + pjson.name.substr(1)} API`,
      version: pjson.version,
      description: pjson.description,
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/api/*.js'],
};

const specs = swaggerJsdoc(options);

router.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});
router.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/api', require('./api'));

module.exports = router;
