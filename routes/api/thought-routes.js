const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// THOUGHTS

// GET all thoughts /api/thoughts/
// POST expects { "thoughtText": "string", "username": "string" }
router.route("/").get(getAllThoughts);

// POST a thought api/thoughts/<userId>
// Expects {"thoughtText": "This is okay", "username": "Yolandi"}
router.route("/:userId").post(createThought);

// GET one, PUT, and DELETE api/thoughts/:id
// PUT expects { "thoughtText": "string", "username": "string" }
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// REACTIONS

// Add reaction /api/thoughts/<thoughtId>/reactions
// Add reaction expects {"reactionBody": "string", "username": "string" }
router.route("/:thoughtId/reactions").post(addReaction);

// Delete a reaction /api/thoughts/<thoughtId>/reactions/reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
