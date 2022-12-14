/*
Betölti egy adott cica adatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CicaModel = requireOption(objectrepository, 'CicaModel');

    return function(req, res, next) {
        CicaModel.findOne({ _id: req.params.cica_id }, (err, cica) => {
            if (err || !cica) {
                return next(err);
            }

            res.locals.cica = cica;
            return next();
        });
    };
};