const router = require("express").Router();
const {
  getAllUsers,
  //   getPizzaById,
  createUser,
  //   updatePizza,
  //   deletePizza,
} = require("../../controllers/user-controller");

// GET all pizzas and POST /api/pizzas
// POST expects { "pizzaName": "string", "createdBy": "string", "size": "Personal",
// "toppings": [ "string","additional strings",]}

// router.route("/").get(getAllPizza).post(createPizza);
router.route("/").get(getAllUsers).post(createUser); // Add post method here

// api/pizzas/:id GET one, PUT, and DELETE
// PUT expects { "pizzaName": "string", "createdBy": "string", "size": "Personal",
// "toppings": [ "string","additional strings",]}

// router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
