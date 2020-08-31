const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    name: String,
    season: Number,
    winner: String,
    runnerUp: String,
    finalJuryMember: String,
    firstOneOut: String,
    airDate: String,
    memorableMoment: String,
    returningPlayers: String,
    seasonImg: String,
    // messageBoard: [messageSchema],
    // location: [locationSchema]
}, {
    timestamps:true
})

module.exports = mongoose.model('Season', seasonSchema)