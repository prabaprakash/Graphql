var { graphql, buildSchema } = require('graphql');
let fs = require("fs");
let path = require("path");
const typeDefs = fs.readFileSync(path.join(__dirname, "schema", "departments.graphql"));
var schema = buildSchema(typeDefs.toString());

var department = [
  {
    dept_no: 'a',
    dept_name: 'alice',
  },
  {
    dept_no: 'b',
    dept_name: 'bob',
  }
];

let db = require('../sequalzie/index');

var root = {
  department: function ({id}) {
    return db.Department.findAll().then(all => all)
  },
  salary: function ({id}) {
    return db.Salaries.findAll().then(all => all)
  },
  employees: function({id}) {
    return db.Employees.findAll().then(all => all);
  }
};

module.exports = { schema: schema, root: root };

// graphql(schema, '{ department(id: "a"){dept_name} }', root).then((response) => {
// console.log("\n" + JSON.stringify(response));
// });