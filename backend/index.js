const express = require('express')
const mongodb = require('./db');
const cors = require('cors');
const session = require('express-session');
const authMiddleware = require('./middlewares/authMiddleware')

mongodb();
app = express()

app.use(cors({
    origin: 'http://localhost:3000', // React app URL
    credentials: true,
}));
app.use(express.json())
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret
    resave: false, // Avoid resaving session if not modified
    saveUninitialized: false, // Don't save uninitialized sessions // MongoDB store
    cookie: {
        httpOnly: true, // Helps prevent XSS attacks
        secure: process.env.NODE_ENV === 'production', // Ensures cookies are only sent over HTTPS in production
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: false// 1 day (in milliseconds)
    }
}));

app.get('/', (req, res) => {
    console.log("Hello World")
})


app.use('/', require('./routes/addUser'));
app.use('/', require("./routes/login")); // It will handle the login of the user
app.use('/', require('./routes/display')); // This route is used for fetching the data from database
app.use('/', authMiddleware, require('./routes/session'))

app.listen(5000, () => {
    console.log("App llistening on port 5000")
})