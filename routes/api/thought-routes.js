const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
} = require("../../controllers/thought-controller");

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

// Add reaction expects {"reactionBody": "string", "username": "string" }
// router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);
// router.route("/:userId/:thoughtId").put(addReaction);

// Add reaction /api/thoughts/<thoughtId>/reactions
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// DELETE A REACTION?? /api/thoughts/<thoughtId>/reactions/reactionId


module.exports = router;

//// EXAMPLE BELOW
//// Add a Comment /api/comments/<pizzaId>
// Expects { "writtenBy": "string", "commentBody": "string" }

// router.route("/:pizzaId").post(addComment);

// Add Reply, delete a comment /api/comments/<pizzaId>/<commentId>
// Add Reply expects {"replyBody": "Lordy!", "writtenBy": "Sid the Kid" }
// router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// Delete a reply /api/comments/<pizzaId>/<commentId>/<replyId>
// router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);
