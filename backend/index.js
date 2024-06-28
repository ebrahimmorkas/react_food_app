const express = require('express')
const mongodb = require('./db');
const cors = require('cors');
mongodb();
app = express()

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    console.log("Hello World")
})


app.use('/', require('./routes/addUser'));
app.use('/', require("./routes/login")); // It will handle the login of the user
app.use('/', require('./routes/display'));

app.listen(5000, () => {
    console.log("App llistening on port 5000")
})