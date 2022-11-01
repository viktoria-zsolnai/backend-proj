const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Napkozi = db.model('Napkozi', {
    nev: String,
    tulaj: String,
    kapacitas: Number
});

module.exports = Napkozi;