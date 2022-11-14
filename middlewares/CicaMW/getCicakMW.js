/*
Betölti az összes cicát az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CicaModel = requireOption(objectrepository, 'CicaModel');

    return function(req, res, next) {
        CicaModel.find({}, (err, cicak) => {
            if (err) {
                return next(err);
            }

            res.locals.cicak = cicak;
            return next();
        });
    }; 
};