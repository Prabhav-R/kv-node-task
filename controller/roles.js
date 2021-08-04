const Role = require("../models/roles");
const EmployeeRole = require("../models/employeeRole");

exports.getAllRoles = (req, resp, next) => {
  Role.findAll()
    .then((roles) => {
      resp.status(200).json({
        message: "roles retrieved successfully",
        roles,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(404).json({
        message: "roles not found",
      });
    });
};

exports.postRole = (req, res, next) => {
  const name = req.body.name;

  Role.create({ name })
    .then((role) => res.json({ msg: "Role created successfully", role }))
    .catch((err) => {
      console.log(err);
      resp.status(404).json({
        message: "Role creation failed",
      });
    });
};

exports.postEmployeeRole = async (req, resp, next) => {
  const employeeId = req.params.id;
  const roleId = req.body.roleId;

  try {
    const employeeRole = await EmployeeRole.create({ employeeId, roleId });

    return resp.json(employeeRole);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ msg: "failed" });
  }
};

exports.editRole = (req, resp, next) => {
  const id = req.params.id;
  const name = req.body.name;

  Role.findByPk(id)
    .then((role) => {
      role.name = name;

      return role.save();
    })
    .then((role) => {
      resp.status(200).json({
        message: "role updated successfully",
        role,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(404).json({
        message: "role updation failed",
      });
    });
};

exports.deleteRole = (req, resp, next) => {
  const id = req.params.id;
  Role.findByPk(id)
    .then((role) => {
      return role.destroy();
    })
    .then(() => {
      resp.status(200).json({
        message: "Role deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(404).json({
        message: "Role deletion failed",
      });
    });
};
