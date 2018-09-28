/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('M','F'),
      allowNull: false
    },
    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'employees'
  });
};
