const express = require('express');

const authenticate = (req, res, next) => {
    if(req.session.id) {
        // session is set
        next();
    }
    else {
        console.log("Session not set");
    }
}

module.exports = authenticate;