const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const EmployeeRole = sequelize.define("EmployeeRole", {
  employeeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = EmployeeRole;
