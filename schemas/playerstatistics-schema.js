let mongoose = require('mongoose');
var collectionName = "PlayerStatistics";
let playerStatistics = mongoose.Schema({
    player : String,
    games_won : Number,
    damage_dealt : Number,
    damage_received : Number,
    games_played : Number,
    games_lost : Number,
    wins_in_a_row : Number
})

playerStatistics.statics.findAll = async () => {
    let found = await PlayerStatistics.find();
    if(!found){
        throw new Error({ error: 'No players...' });
    }
    return found;
}

playerStatistics.statics.findByName = async (nameToFind) => {
    let found = await PlayerStatistics.find({ 'player' : nameToFind});
    if(!found){
        throw new Error({ error: 'Player Not found...' });
    }
    return found;
}

const PlayerStatistics = mongoose.model('PlayerStatistics', playerStatistics, collectionName);

module.exports = PlayerStatistics;