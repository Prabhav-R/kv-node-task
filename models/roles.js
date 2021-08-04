const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Role = sequelize.define("roles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
