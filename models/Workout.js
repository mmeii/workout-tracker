// depencies for using mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set workout model
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of exercise!"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of the exercise!"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Please enter the duration of your exercise!"
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;