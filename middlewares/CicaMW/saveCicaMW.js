/*
Ha módosultak egy cica adatai akkor a változásokat menti az adatbázisban
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};