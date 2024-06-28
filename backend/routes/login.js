const express = require('express');
const db = require('../db');
const router = express.Router();
const cors = require('cors');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session')

router.post('/login', async (req, res) => {
    console.log("Request receive")
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)

    const result = await user.findOne({email: email})
    if(result) {
        const decryptedPassword = await bcrypt.compare(password, result['password'])
        // console.log(decryptedPassword)
        if(decryptedPassword) {
            // console.log("Password is right");
            req.session.id = "abc";
            req.session.username = "abc"
            console.log("dhjegesd,asuidh")
            console.log(req.session.username)
            return res.json({success: true})
        } 
        else {
            // console.log("Password is wrong")
            return res.json({success: false})
        }
    }
    else {
        // console.log("User does not exist");
        return res.json({success:false})
    }
})

module.exports = router;