const express = require('express');
const DropsData = require('../schemas/dropsdata-schema');
const Enemy = require('../schemas/enemy-schema');
const GameParams = require('../schemas/gameparams-schema');
const GameStatistics = require('../schemas/gamestatistics-schema');
const MainCharacter = require('../schemas/maincharacter-schema');
const PlayerStatistics = require('../schemas/playerstatistics-schema');
const User = require('../schemas/user-schema');
const app = express.Router();

//app.use(express.json);

app.get('/api/enemy', async(req, res) => {
	res.set('content-type', 'application/json');
    try {
        let enemy = await Enemy.findAll();
        if (!enemy) {
            return res.status(401).send({error: 'No enemies...'});
        }
        res.send({enemy});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/enemy/:name', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let enemy = await Enemy.findByName(req.params.name);
        if (!enemy) {
            return res.status(401).send({error: 'No enemies...'});
        }
        res.send({enemy});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/maincharacter', async(req, res) => {
	res.set('content-type', 'application/json');
    try {
        let mainCharacter = await MainCharacter.findAll();
        if (!mainCharacter) {
            return res.status(401).send({error: 'No playables...'});
        }
        res.send({mainCharacter});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/maincharacter/:name', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let mainCharacter = await MainCharacter.findByName(req.params.name);
        if (!mainCharacter) {
            return res.status(401).send({error: 'No playables found with this name...'});
        }
        res.send({mainCharacter});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/dropsdata', async(req, res) => {
	res.set('content-type', 'application/json');
    try {
        let dropsData = await DropsData.findAll();
        if (!dropsData) {
            return res.status(401).send({error: 'No drops...'});
        }
        res.send({dropsData});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/dropsdata/:name', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let dropsData = await DropsData.findByName(req.params.name);
        if (!dropsData) {
            return res.status(401).send({error: 'No drops found with this name...'});
        }
        res.send({dropsData});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/gamestatistics', async(req, res) => {
	res.set('content-type', 'application/json');
    try {
        let gamestatistics = await GameStatistics.findAll();
        if (!gamestatistics) {
            return res.status(401).send({error: 'No statistics...'});
        }
        res.send({gamestatistics});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/user', async(req, res) => {
	res.set('content-type', 'application/json');
    try {
        let user = await User.findAll();
        if (!user) {
            return res.status(401).send({error: 'No users...'});
        }
        res.send({user});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/user/:username', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let user = await User.findByUsername(req.params.username);
        if (!user) {
            return res.status(401).send({error: 'No user found with this username...'});
        }
        res.send({user});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/user/:name', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let user = await User.findByName(req.params.name);
        if (!user) {
            return res.status(401).send({error: 'No users found with this name...'});
        }
        res.send({user});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/playerstatistics/:player', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let player = await PlayerStatistics.findByName(req.params.player);
        if (!player) {
            return res.status(401).send({error: 'No players found with this name...'});
        }
        res.send({player});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/playerstatistics', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let player = await PlayerStatistics.findAll();
        if (!player) {
            return res.status(401).send({error: 'No players...'});
        }
        res.send({player});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/api/gameparams', async(req, res) => {
    res.set('content-type', 'application/json');
    try {
        let gameParams = await GameParams.findAll();
        if (!gameParams) {
            return res.status(401).send({error: 'No params found...'});
        }
        res.send({gameParams});
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = app;