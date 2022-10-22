const express = require('express');
const app = express();

app.use(express.static('static'));

require('./route/index')(app); 

var server = app.listen(3000, () => {
    console.log('Running on :3000');
});

