const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jdl7a5', { useNewUrlParser: true });

module.exports = mongoose;