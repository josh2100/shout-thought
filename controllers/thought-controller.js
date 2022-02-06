const { Thought, User } = require("../models");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({})
        // Include reactions associated with Thought
        .populate({
          path: "reactions",
          // Omits __v
          select: "-__v",
        })
        .select("-__v")
        // Sort by descending timestamps to get newest first
        .sort({ _id: -1 });

      if (!dbThoughtData) {
        res.status(404).json({ message: "No Thoughts found" });
        return;
      }

      res.status(200).json(dbThoughtData);
    } catch (err) {
      console.log("err");
      res.status(400).json(err);
    }
  },

  async getThoughtById({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id })
        .populate({
          path: "reactions",
          select: "-__v",
        })
        .select("-__v");

      if (!dbThoughtData) {
        res.status(404).json({ message: "No Thought with that id found" });
        return;
      }

      res.status(200).json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async createThought({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true, runValidators: true }
      );

      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async updateThought({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        {
          _id: params.id,
        },
        body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!dbThoughtData) {
        res.status(404).json({ message: "No Thought with that id found" });
        return;
      }
      res.status(200).json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async deleteThought({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });

      if (!dbThoughtData) {
        res.status(404).json({ message: "No Thought with that id found." });
        return;
      }

      res.status(200).json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Add Reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      // To avoid duplicates, use addToSet instead of $push
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id! " });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
