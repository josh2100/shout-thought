const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const validateEmail = require("../utils/validateEmail");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Please provide a username!",
      trim: true,
    },
    //https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    email: {
      type: String,
      trim: true,
      // lowercase: true,
      unique: true,
      required: "Please provide a valid email address",
      validate: [validateEmail, "Please use a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please use a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // add a getter for friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
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

// Get total count of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the UserSchema
const User = model("User", UserSchema);

// Export the User model
module.exports = User;
