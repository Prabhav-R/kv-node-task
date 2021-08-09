const { DataTypes } = require("sequelize");
const Employee = require("../models/employees");
const sequelize = require("../util/database");

const Address = sequelize.define("address", {
  employeeId: {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: Employee,
      key: "id",
    },
  },
  housename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Address;
