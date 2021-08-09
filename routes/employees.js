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
router.get("/", authorize, empController.getAllEmployees);

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
  authorize,
  validate(editEmployeeBodySchema),
  empController.editEmployee
);

// DELETE => /employees/id
router.delete("/:id", authorize, empController.deleteEmployee);

// GET => /employees/id/departments
router.get("/:id/departments", authorize, empController.getEmployeeDepartments);

// POST => /employees/id/departments
router.post(
  "/:id/departments",
  authorize,
  validate(postEmployeeDepartmentBodySchema),
  empController.postEmployeeDepartment
);

router.post(
  "/:id/roles",
  authorize,
  validate(postEmployeeRoleBodySchema),
  roleController.postEmployeeRole
);

router.post(
  "/:id/address",
  authorize,
  validate(postEmployeeAddressSchema),
  empController.postEmployeeAddress
);

router.put(
  "/:id/address",
  authorize,
  validate(postEmployeeAddressSchema),
  empController.editEmployeeAddress
);

module.exports = router;
