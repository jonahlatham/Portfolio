const express = require('express')
const cors = require('cors')
const path = require('path');
require('dotenv').config()

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', (req, res) => {
    res.sendFile('jonahlatham.html', {
        root: path.join(__dirname, 'public')
    })
});
const port = process.env.PORT || 8090
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})