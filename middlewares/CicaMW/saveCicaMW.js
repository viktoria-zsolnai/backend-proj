/*
Ha módosultak egy cica adatai akkor a változásokat menti az adatbázisban
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CicaModel = requireOption(objectrepository, 'CicaModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.suly === 'undefined' ||
            typeof req.body.etel === 'undefined' ||
            typeof req.body.baratsagos === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.cica === 'undefined') {
            res.locals.cica = new CicaModel();
        }

        if (Number.isNaN(parseInt(req.body.suly, 10))) {
            return next(new Error('Súly számmal kell hogy megadva legyen!'));
        }

        res.locals.cica.nev = req.body.nev;
        res.locals.cica.suly = parseInt(req.body.suly, 10);
        res.locals.cica.etel = req.body.etel;
        res.locals.cica.baratsagos = req.body.baratsagos;
        res.locals.cica._napkozije = req.body._napkozije;

        res.locals.cica.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/cica_nezet');
        });
    };
};