/*
Betölti egy adott napközi adatait az adatbázisból
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const NapkoziModel = requireOption(objectrepository, 'NapkoziModel');

    return function(req, res, next) {
        NapkoziModel.findOne({ _id: req.params.napkozi_id }, (err, napkozi) => {
            if (err || !napkozi) {
                return next(err);
            }

            res.locals.napkozi = napkozi;
            return next();
        });
    };
};