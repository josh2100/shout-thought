const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // Generated automatically
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Please provide a reply body text!",
      maxLength: [280, "Maximum 10 characters exceeded"],
      trim: true,
    },
    username: {
      type: String,
      required: "Please provide a valid username",
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    // Allow the use of getters
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      trim: true,
      required: true,
      // validate that it is between 1 and 280 characters
      maxLength: [280, "Maximum 10 characters exceeded"],
    },
    username: {
      type: String,
      required: "Please provide a valid username",
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // Associate reactions with thoughts
    reactions: [ReactionSchema],
  },
  // Schema options
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // False tells mongoose not to return the id
    id: false,
  }
);

// Get total count of reactions
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// Export the Thought model
module.exports = Thought;
