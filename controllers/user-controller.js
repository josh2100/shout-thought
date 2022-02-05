const { User } = require("../models");

const userController = {
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find({})
        // Include thoughts associated with user
        .populate({
          path: "thoughts",
          // Omits __v
          select: "-__v",
        })
        .select("-__v")
        // Sort by descending timestamps to get newest first
        .sort({ _id: -1 });

      if (!dbUserData) {
        res.status(404).json({ message: "No users found" });
        return;
      }

      //???? add a status code here?
      res.status(200).json(dbUserData);
    } catch (err) {
      console.log("err");
      res.status(400).json(err);
    }
  },

  async getUserById({ params }, res) {
    try {
      const dbUserData = await User.findOne({ _id: params.id })
        //   .populate({
        //     path: "thoughts",
        //     select: "-__v",
        //   })
        .select("-__v");

      if (!dbUserData) {
        res.status(404).json({ message: "No User with that id found" });
        return;
      }

      res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async createUser({ body }, res) {
    try {
      const dbUserData = await User.create(body);

      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async updateUser({ params, body }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        {
          _id: params.id,
        },
        body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!dbUserData) {
        res.status(404).json({ message: "No user with that id found" });
        return;
      }
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async deleteUser({ params }, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.id });

      // THIS ONE WORKS
      if (!dbUserData) {
        res.status(404).json({ message: "No user with that id found." });
        return;
      }

      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = userController;
