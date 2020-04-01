let mongoose = require('mongoose');
var collectionName = "GameParams";
let gameParams = mongoose.Schema({
    phase_time : Number,
    min_drop_time : Number,
    max_drop_time : Number,
    base_monsters_count : Number,
    collision_probability : Number
})

gameParams.statics.findAll = async () => {
    let found = await GameParams.find();
    if(!found){
        throw new Error({ error: ' Not found...' });
    }
    return found;
}

const GameParams = mongoose.model('GameParams', gameParams, collectionName);

module.exports = GameParams;