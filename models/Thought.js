// const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

// const ThoughtSchema = new Schema(
//   {
//     thoughtText: {
//       type: String,
//       trim: true,
//       // validate that it is between 1 and 280 characters
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: "Please provide a valid email address",
//       trim: true,
//     },
//     thoughts: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Thought",
//       },
//     ],
//     friends: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (createdAtVal) => dateFormat(createdAtVal),
//     },
//   },
//   // Schema options
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true,
//     },
//     // False tells mongoose not to return the id
//     // id: false,
//   }
// );

// // Get total count of friends
// UserSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

// // Create the User model using the UserSchema
// const User = model("User", UserSchema);

// // Export the User model
// module.exports = User;