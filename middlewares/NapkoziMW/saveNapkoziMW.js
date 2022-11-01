/*
Ha módosultak egy napközi adatai akkor menti azt az adatbázisban
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};