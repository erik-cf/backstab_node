const mongoose = require('mongoose');
var collectionName = "MainCharacter";
const playable = mongoose.Schema({
    name : String,
    attack : Number,
    defense : Number,
    hp : Number,
    movement_speed : Number,
    attack_speed : Number,
    range : Number
});

playable.statics.findAll = async () => {
    const found = await MainCharacter.find();
    if(!found){
        throw new Error({ error: 'No main characters...' });
    }
    return found;
}

playable.statics.findByName = async (nameToFind) => {
    const found = await MainCharacter.find({ 'name' : nameToFind});
    if(!found){
        throw new Error({ error: 'Main Character Not found...' });
    }
    console.log('me cagonto!');
    return found;
}

const MainCharacter = mongoose.model('MainCharacter', playable, collectionName);

module.exports = MainCharacter;