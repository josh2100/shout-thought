const { User } = require("../models");

const userController = {
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find({});
      // Include thoughts associated with user
      // .populate({
      //   path: "thoughts",
      //   // Omits __v
      //   select: "-__v",
      // })
      // .select("-__v")
      // // Sort by descending timestamps to get newest first
      // .sort({ _id: -1 });

      // not working
      //   if (!dbUserData) {
      //     res.status(404).json({ message: "No users" });
      //   }

      //???? add a status code here?
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log("err");
      res.status(400).json(err);
    }
  },

  // Get user by id here

  async createUser({ body }, res) {
    try {
      const dbUserData = await User.create(body);

      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Delete user here

  // Update a user here
};

module.exports = userController;
