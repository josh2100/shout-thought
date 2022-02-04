const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  //   updatePizza,
  //   deletePizza,
} = require("../../controllers/user-controller");

// GET all Users and POST /api/users
// POST expects { "username": "string", "email": "string", }

router.route("/").get(getAllUsers).post(createUser); // Add post method here

// api/pizzas/:id GET one, PUT, and DELETE
// PUT expects { "username": "string", "email": "string", }

// router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);
router.route("/:id").get(getUserById);

module.exports = router;
