const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    winner: String,
    runnerUp: String,
    finalJuryMember: String,
    firstOneOut: String,
    airDate: Date,
    memorableMoment: String,
    returningPlayers: String,
    seasonImg: String,

    //messageBoard: [messageSchema]
    //location: [locationSchema]
}, {
    timestamps:true
})

module.exports = mongoose.model('Season', seasonSchema)