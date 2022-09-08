const express = require("express");
const Workout = require("../models/Workout");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Got All");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(`Got ${req.id}`);
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    console.log("Can't create new record: ", err.message);
    res.status(400).json({ error: err.message });
  }
});

router.patch("/:id", (req, res) => {
  console.log(req.params);
  res.send(`Patched ${req.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.body);
  res.send("Deleted");
});

module.exports = router;
