const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "Setup is required!"],
        minlength: [3, "Setup must be at least 2 characters long"]
    },
    punchline: {
        type: String,
        required:[true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }},
    {timestamps:true}
)

//register the above code at a table in mongodb
const Joke = mongoose.model("Joke", JokeSchema )

module.exports = Joke;