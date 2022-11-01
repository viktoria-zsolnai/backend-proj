/*
Ha módosultak egy cica adatai akkor a változásokat menti az adatbázisban
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};