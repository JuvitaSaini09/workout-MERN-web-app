const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//when creating a new workout, we can define the schema like title, description, date, etc along with ther types of workouts
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Workout", workoutSchema);
