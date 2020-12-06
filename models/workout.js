const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    Date: {
        type: Date,
        trim: true,
        required: Date.now()
    },
    exercise: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


//create schema