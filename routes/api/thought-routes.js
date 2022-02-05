const router = require("express").Router();
const {
  getAllthoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/Thought-controller");

// GET all thoughts and POST /api/thoughts
// POST expects { "Thoughtname": "string", "email": "string", }
router.route("/").get(getAllthoughts).post(createThought); // Add post method here

// GET one, PUT, and DELETE api/thoughts/:id
// PUT expects { "Thoughtname": "string", "email": "string", }
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteUser);

module.exports = router;
