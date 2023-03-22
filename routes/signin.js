const express = require('express');
const { userInfo } = require('os');
const router = express.Router();
const path = require('path');
const UserData = require('../models/userdata');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'html', 'sign-in.html'));
});

router.post('/submit', (req, res) => {
    let uemail = req.body.email;
    let upass = req.body.password;

    UserData.find({
        email: uemail,
        password: upass
    }).then((user)=>{
        if(user.length){
            console.log("User authenticated.");
        }else{
            console.log("User not found.");
        }
        res.redirect('back');
    }).catch((err)=>{
        console.log("Authentication Error: ", err);
        return;
    })
});

module.exports = router;