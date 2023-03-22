const express = require('express');
const router = express.Router();
const path = require('path');
const UserData = require('../models/userdata');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'html', 'sign-up.html'));
});

router.post('/submit', (req, res) => {
    UserData.create({
        name: req.body.name,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
    }).then((user) => {
        console.log("User created: ", user);
        return res.redirect('back');
    }).catch((err) => {
        console.log("User Error: sign up failed, ", err);
        return;
    });
});

module.exports = router;