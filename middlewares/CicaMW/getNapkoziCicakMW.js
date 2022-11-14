const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CicaModel = requireOption(objectrepository, 'CicaModel');

    return function(req, res, next) {
        if (typeof res.locals.napkozi === 'undefined') {
            return next();
        }

        CicaModel.find({ _napkozije: req.params.napkozi_id }, (err, cicak) => {
            if (err) {
                return next(err);
            }

            res.locals.cicak = cicak;
            return next();
        });
    };
};