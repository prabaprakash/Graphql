var express = require('express');
var router = express.Router();
const graphqlHTTP = require('express-graphql');
const graphqlModel = require('../graphql');

router.post('/graphql', graphqlHTTP({
  schema: graphqlModel.schema,
  rootValue: graphqlModel.root,
  graphiql: true
}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
