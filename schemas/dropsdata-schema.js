let mongoose = require('mongoose');

var collectionName = "DropsData";

let dropsData = mongoose.Schema({
    name : String,
    value : Number,
    duration : Number,
    min_range : Number,
    max_range : Number
});

dropsData.statics.findByName = async (nameToFind) => {
    let found = await DropsData.find({ 'name' : nameToFind });
    if(!found){
        throw new Error({ error: 'Drop Not found...' });
    }
    return found;
}

dropsData.statics.findAll = async () => {
    let found = await DropsData.find();
    if(!found){
        throw new Error({ error: 'No drops...' });
    }
    return found;
}

const DropsData = mongoose.model('DropsData', dropsData, collectionName);

module.exports = DropsData;