const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require("../../controllers/user-controller");

// USERS

// GET all Users and POST /api/users
// POST expects { "username": "string", "email": "string", }
router.route("/").get(getAllUsers).post(createUser);

// GET one, PUT, and DELETE api/users/:id
// PUT expects { "username": "string", "email": "string", }
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// FRIENDS

// POST new friend, DELETE friend api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
