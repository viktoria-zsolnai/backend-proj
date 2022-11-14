const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/jdl7a5', { useNewUrlParser: true });

module.exports = mongoose;