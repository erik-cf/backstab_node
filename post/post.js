const express = require('express');
const User = require('../schemas/user-schema');
var crypto = require('crypto');
var NodeRSA = require('node-rsa');
require('dotenv').config();

privateKey = '-----BEGIN PRIVATE KEY-----' + process.env.PRIVATE_KEY + '-----END PRIVATE KEY-----';
const privateKeyRSA = new NodeRSA(privateKey);
const app = express.Router();

app.post('/api/user', async(req, res) => {
    try {
        if(req.body.role){
            req.body.role = 0;
        }
        if(req.body.password){
            req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex').toUpperCase();
        }
        if(req.body.mail){
            req.body.mail = privateKeyRSA.encrypt(req.body.mail, 'base64');
        }
        const user = new User(req.body);
        await user.save();
        res.status(201).send({user});
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = app;