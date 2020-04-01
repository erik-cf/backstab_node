let mongoose = require('mongoose');
var collectionName = "User";
let user = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    surname : {
        type: String,
        required : true
    },
    username : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true,
        select : false
    },
    mail : {
        type: String,
        required : true,
        select : false
    },
    role : {
        type: Number,
        enum : [0, 1],
        default : 0
    }
}, { versionKey: false });

user.pre('save', async function (next) {
    const found = this;
    next();
})

user.statics.findByName = async (nameToFind) => {
    let found = await User.find({ 'name' : nameToFind });
    if(!found){
        throw new Error({ error: 'User Not found...' });
    }
    return found;
}

user.statics.findByUsername = async (usernameToFind) => {
    let found = await User.find({ 'username' : usernameToFind });
    if(!found){
        throw new Error({ error: 'User Not found...' });
    }
    return found;
}

user.statics.findAll = async () => {
    let found = await User.find();
    if(!found){
        throw new Error({ error: 'No users...' });
    }
    return found;
}

const User = mongoose.model('User', user, collectionName);

module.exports = User;