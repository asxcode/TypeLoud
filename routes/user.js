const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Please provide a username.</h1>');
});

router.get('/:username', (req, res) => {
    res.send("Here's the profile you asked for : )");
});

module.exports = router;