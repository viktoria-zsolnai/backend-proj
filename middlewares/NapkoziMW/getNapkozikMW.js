/*
Betölti az összes napközit az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
const NapkoziModel = requireOption(objectrepository, 'NapkoziModel');

    return function(req, res, next) {
        NapkoziModel.find({}, (err, napkozik) => {
            if (err) {
                return next(err);
            }

            res.locals.napkozik = napkozik;
            return next();
        });
    }; 
};