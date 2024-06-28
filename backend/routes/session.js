const express = require('express');
const session = require('express-session');
const router = express.Router()

router.post('/session', (req, res) => {
    console.log("Hi")
    if(req.session.id) {
        console.log(req.session.username)
        console.log("Helo")
        return res.json({login: true})
    } else
    {
        console.log("Session not set");
    }
})

module.exports = router