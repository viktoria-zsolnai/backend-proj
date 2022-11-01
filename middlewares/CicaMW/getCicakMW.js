/*
Betölti az összes cicát az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cicak = [
            {
                _id : 1,
                nev : 'Cirmi',
                suly : '5',
                etel : "Keksz",
                baratsagos : 'nem'
            },
            {
                _id : 2,
                nev : 'Bátor',
                suly : '4',
                etel : "Tej",
                baratsagos : 'nem'
            },
            {
                _id : 3,
                nev : 'Lulu',
                suly : '4',
                etel : "Hamburger",
                baratsagos : 'igen'
            },
            {
                _id : 4,
                nev : 'Fenrir',
                suly : '5',
                etel : "Pizza",
                baratsagos : 'nem'
            },
            {
                _id : 5,
                nev : 'Sanyi',
                suly : '4',
                etel : "Hal",
                baratsagos : 'igen'
            },
            {
                _id : 6,
                nev : 'Elek',
                suly : '5',
                etel : "Csülök",
                baratsagos : 'igen'
            }
        ];
        next();
    };
};