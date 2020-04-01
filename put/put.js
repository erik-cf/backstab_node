const express = require('express');
const PlayerStatistics = require('../schemas/playerstatistics-schema');
const GameStatistics = require('../schemas/gamestatistics-schema');
require('dotenv').config();

const app = express();

app.put('/api/playerstatistics/:player', async (req, res) => {
    try{
        await PlayerStatistics.findOneAndUpdate(req.params.player, req.body);
        let playerStatistics = await PlayerStatistics.findAll();
        res.status(201).send({playerStatistics});
    }catch(error){
        res.status(400).send(error);
    }
});

app.put('/api/gamestatistics', async (req, res) => {
    try{
        await GameStatistics.findOneAndUpdate({}, req.body);
        let gameStatistics = await GameStatistics.findAll();
        res.status(201).send({gameStatistics});
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = app;