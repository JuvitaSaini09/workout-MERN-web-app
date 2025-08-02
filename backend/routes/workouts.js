const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
router.post("/", createWorkout); // create a new workout
router.get("/", getAllWorkouts); // get all workouts
router.get("/:id", getWorkout); // get a single workout
router.delete("/:id", deleteWorkout); // delete a workout
router.patch("/:id", updateWorkout); // update a workout

module.exports = router;
