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


app.use('/', require('./routes/addUser'))

app.listen(5000, () => {
    console.log("App llistening on port 5000")
})