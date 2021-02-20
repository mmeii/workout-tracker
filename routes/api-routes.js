// dependencies
const db = require("../models");
const router = require("express").Router();

// API routes

// GET route
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// PUT route to add excercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: body }
        },
        { new: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// POST route
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).limit(5)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
