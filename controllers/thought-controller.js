const { Thought } = require("../models");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({});
      // Include thoughts associated with Thought
      // .populate({
      //   path: "thoughts",
      //   // Omits __v
      //   select: "-__v",
      // })
      // .select("-__v")
      // // Sort by descending timestamps to get newest first
      // .sort({ _id: -1 });

      // not working
      //   if (!dbThoughtData) {
      //     res.status(404).json({ message: "No Thoughts found" });
      // return;
      //   }

      //???? add a status code here?
      res.status(200).json(dbThoughtData);
    } catch (err) {
      console.log("err");
      res.status(400).json(err);
    }
  },

  async getThoughtById({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id })
        //   .populate({
        //     path: "thoughts",
        //     select: "-__v",
        //   })
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

  async createThought({ body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);

      res.status(200).json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Update a Thought here
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

      // THIS ONE WORKS
      if (!dbThoughtData) {
        res.status(404).json({ message: "No Thought with that id found." });
        return;
      }

      res.status(200).json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = ThoughtController;
