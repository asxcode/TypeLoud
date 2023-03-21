const express = require('express');
const path = require('path');
const router = express.Router();
const feedController = require('../controllers/feed_controller');

router.use('/user', require('./user'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'html', 'home.html'));
});

router.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'html', 'sign-in.html'));
});

router.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'html', 'sign-up.html'));
});

router.get('/feed', feedController);

router.get('/profile', (req, res) => {
    res.send("<h1>User profile page.</h1>");
});

module.exports = router;