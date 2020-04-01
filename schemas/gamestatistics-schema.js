let mongoose = require('mongoose');
var collectionName = "GameStatistics";
let gameStatistics = mongoose.Schema({
    name : String,
    games : Number,
    players : Number,
    average_time : Number,
    average_player_dmg_dealt : Number,
    average_player_dmg_received : Number,
    average_drops_picked : Number
})

gameStatistics.statics.findAll = async () => {
    let found = await GameStatistics.find();
    if(!found){
        throw new Error({ error: 'Statistics Not found...' });
    }
    return found;
}

const GameStatistics = mongoose.model('GameStatistics', gameStatistics, collectionName);

module.exports = GameStatistics;