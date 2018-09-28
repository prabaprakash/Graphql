const Sequelize = require("sequelize");
const sequelize = new Sequelize("employees", "root", "p", {
  host: "52.",
  dialect: "mysql",
  operatorsAliases: false,
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  },
});

var db = {
  Sequelize: Sequelize,
  sequelize: sequelize
};

db.Department = db.sequelize.import('./models/departments');
db.Salaries = db.sequelize.import('./models/salaries');
db.Titles = db.sequelize.import('./models/titles');
db.Employees = db.sequelize.import('./models/employees');
db.CurrentDeptEmp = db.sequelize.import('./models/current_dept_emp');

module.exports = db;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });
