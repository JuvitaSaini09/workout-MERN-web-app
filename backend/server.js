require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

//express app
const app = express();
app.use(express.json()); // to parse JSON bodies

//middleware
app.use((req, res, next) => {
  console.log("middle ware");
  console.log("req path ::::::", req.path, "req method ::::::", req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
    //listen for requests
    app.listen(PORT, () => {
      console.log("listening for requests on port", PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
