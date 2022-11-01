/*
Betölti az összes napközit az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.napkozik = [
            {
                _id : 1,
                nev : 'Napsugár napközi',
                tulaj : 'Irén',
                kapacitas : "5",
            },
            {
                _id : 2,
                nev : 'Csillag napközi',
                tulaj : 'Imre',
                kapacitas : "10",
            },
            {
                _id : 3,
                nev : 'Levedula napközi',
                tulaj : 'László',
                kapacitas : "12",
            },
            {
                _id : 4,
                nev : 'Béke napközi',
                tulaj : 'Csilla',
                kapacitas : "7",
            }
        ];
        next();
    };
};