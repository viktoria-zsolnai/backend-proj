
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Cica = db.model('Cica', {
    nev: String,
    suly: Number,
    etel: String,
    baratsagos: String,
    _napkozije: {
        type: Schema.Types.ObjectId,
        ref: 'Napkozi'
    }
});

module.exports = Cica;