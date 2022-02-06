const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// GET all Users and POST /api/users
// POST expects { "username": "string", "email": "string", }
router.route("/").get(getAllUsers).post(createUser);

// GET one, PUT, and DELETE api/users/:id
// PUT expects { "username": "string", "email": "string", }
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
