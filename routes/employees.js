const express = require("express");
const validate = require("express-validation");
const empController = require("../controller/employees");
const roleController = require("../controller/roles");
const { authorize } = require("../middleware/authorization.middlware");
const {
  idParamsSchema,
  postEmployeeBodySchema,
  editEmployeeBodySchema,
  postEmployeeDepartmentBodySchema,
  postEmployeeRoleBodySchema,
  postEmployeeAddressSchema,
} = require("../validation/joiRequestValidation");

const router = express.Router();

// GET => /employees
router.get("/", empController.getAllEmployees);

// GET => /employees/id
router.get(
  "/:id",
  authorize,
  validate(idParamsSchema),
  empController.getEmployee
);

// POST => /employees
router.post(
  "/",
  // authorize,
  validate(postEmployeeBodySchema),
  empController.postEmployee
);

// PUT => /employees/id
router.put(
  "/:id",
  validate(editEmployeeBodySchema),
  empController.editEmployee
);

// DELETE => /employees/id
router.delete("/:id", empController.deleteEmployee);

// GET => /employees/id/departments
router.get("/:id/departments", empController.getEmployeeDepartments);

// POST => /employees/id/departments
router.post(
  "/:id/departments",
  validate(postEmployeeDepartmentBodySchema),
  empController.postEmployeeDepartment
);

router.post(
  "/:id/roles",
  validate(postEmployeeRoleBodySchema),
  roleController.postEmployeeRole
);

router.post(
  "/:id/address",
  validate(postEmployeeAddressSchema),
  empController.postEmployeeAddress
);

router.put(
  "/:id/address",
  validate(postEmployeeAddressSchema),
  empController.editEmployeeAddress
);

module.exports = router;
