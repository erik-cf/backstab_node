let mongoose = require('mongoose');

var collectionName = "Enemy";

let enemy = mongoose.Schema({
    name : String,
    attack : Number,
    defense : Number,
    hp : Number,
    movement_speed : Number,
    attack_speed : Number,
    range : Number
});

enemy.pre('save', async function (next) {
    const found = this;
    next();
})

enemy.statics.findAll = async () => {
    let found = await Enemy.find();
    if(!found){
        throw new Error({ error: 'No enemies...' });
    }
    return found;
}

enemy.statics.findByName = async (nameToFind) => {
    let found = await Enemy.find({ 'name' : nameToFind });
    if(!found){
        throw new Error({ error: 'Enemy Not found...' });
    }
    return found;
}

const Enemy = mongoose.model('Enemy', enemy, collectionName);

module.exports = Enemy;