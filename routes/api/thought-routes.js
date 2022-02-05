const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/Thought-controller");

// GET all thoughts and POST /api/thoughts
// POST expects { "thoughtText": "string", "username": "string" }
router.route("/").get(getAllThoughts).post(createThought); // Add post method here
// router.route("/").get(getAllThoughts);

// GET one, PUT, and DELETE api/thoughts/:id
// PUT expects { "thoughtText": "string", "username": "string" }
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
