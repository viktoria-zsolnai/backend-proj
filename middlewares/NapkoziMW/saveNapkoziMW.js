/*
Ha módosultak egy napközi adatai akkor menti azt az adatbázisban
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};