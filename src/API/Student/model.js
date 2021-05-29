const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    test_score: {
        first_round: { type: Number, max: 10 },
        second_round: { type: Number, max: 10 },
        third_round: { type: Number, max: 10 }
    }

})


module.exports = mongoose.model('student', studentSchema)