const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Address = sequelize.define("address", {
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
