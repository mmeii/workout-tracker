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
                // required: "Please enter the weight"
            },
            reps: {
                type: Number,
                trim: true,
                // required: "Please enter number of reps!"
            },
            sets: {
                type: Number,
                trim: true,
                // required: "Please enter number of sets!"
            },
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;