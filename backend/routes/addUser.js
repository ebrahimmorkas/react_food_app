const express = require('express')
const userSchema = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt');

router.post('/createUser', async (req, res) => {
    const saltRounds = 10;
   try {
    const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(req.body.password, salt)
    userSchema.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: hashPassword
    })
    res.send({success: true})
   } catch (error) {
    console.log("Error")
    res.send({success: false})
   }
})

module.exports = router;