const express = require('express')
const app = express();
const path = require('path')
const port = 3001



app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../rotes', 'login.html'));
})

app.listen(port, () => {
    console.log('teste')
})