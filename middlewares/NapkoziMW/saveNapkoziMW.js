/*
Ha módosultak egy napközi adatai akkor menti azt az adatbázisban
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const NapkoziModel = requireOption(objectrepository, 'NapkoziModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.tulaj === 'undefined' ||
            typeof req.body.kapacitas === 'undefined'
        ) {
            console.log(req.body.nev);
            return next();
        }

        if (typeof res.locals.napkozi === 'undefined') {
            res.locals.napkozi = new NapkoziModel();
        }

        res.locals.napkozi.nev = req.body.nev;
        res.locals.napkozi.tulaj = req.body.tulaj;
        res.locals.napkozi.kapacitas = req.body.kapacitas;

        res.locals.napkozi.save(err => {
            if (err) {
                
                return next(err);
            }
            
            return res.redirect('/napkozi_nezet');
        });
    };
};