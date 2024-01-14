const express = require('express');
const axios = require('axios');
const { categorizeByGender } = require('../utils');

const router = express.Router();
const uniqueUsers = new Set();

router.get('/', async(req, res) => {
    try {
        const limit = req.query.limit || 10;
        const response = await axios.get(`https://randomuser.me/api/?results=${limit}`);
     
        const uniqueResults = response.data.results.filter(user => !uniqueUsers.has(user.login.uuid));

        uniqueResults.forEach(user => uniqueUsers.add(user.login.uuid));

        if(req.query.categorize === 'gender'){
            const userByGender = categorizeByGender(uniqueResults);
            const formattedUsers = JSON.stringify(userByGender, null, 2);
            res.setHeader('Content-Type', 'application/json');
            res.send(formattedUsers);
        } else {
            const formattedUsers = JSON.stringify(uniqueResults, null, 2)
            res.setHeader('content-type', 'application/json');
            res.send(formattedUsers);
          }
        } catch (error) {
            console.error(error);
            res.status(500).send ('Error interno del servidor');
       }
    });

    module.exports = router;