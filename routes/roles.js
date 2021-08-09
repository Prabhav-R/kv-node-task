const router = require("express").Router();
const { authorize } = require("../middleware/authorization.middlware");
const roleController = require("../controller/roles");
const validate = require("express-validation");

const {
  postRoleBodySchema,
  editRoleBodySchema,
  postEmployeeRoleBodySchema,
} = require("../validation/joiRequestValidation");

// GET => /roles
router.get("/", authorize, roleController.getAllRoles);

// POST => /roles
router.post(
  "/",
  authorize,
  validate(postRoleBodySchema),
  roleController.postRole
);

// PUT => /roles/id
router.put(
  "/:id",
  authorize,
  validate(editRoleBodySchema),
  roleController.editRole
);

// DELETE => /employees/id
router.delete("/:id", authorize, roleController.deleteRole);

module.exports = router;
