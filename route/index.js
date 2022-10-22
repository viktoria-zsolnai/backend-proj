const renderMW = require('../middlewares/renderMW');
const getNapkozikMW = require('../middlewares/NapkoziMW/getNapkozikMW');
const getNapkoziMW = require('../middlewares/NapkoziMW/getNapkoziMW');
const saveNapkoziMW = require('../middlewares/NapkoziMW/saveNapkoziMW');
const getCicakMW = require('../middlewares/CicaMW/getCicakMW');
const getCicaMW = require('../middlewares/CicaW/getCicaMW');
const saveCicaMW = require('../middlewares/CicaMW/saveCicaMW');
const delCicaMW = require('../middlewares/CicaMW/delCicaMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        renderMW(objRepo, 'index'));
    
    app.get('/napkozi_nezet',
        getNapkozikMW(objRepo),
        renderMW(objRepo, 'napkozi_nezet'));

    app.get('/napkozi_nezet/:napkozi_id/cicak',
        getNapkoziMW(objRepo),
        getCicakMW(objRepo), 
        renderMW(objRepo, 'napkozi_cicai'));

    app.use('/napkozi_nezet/:napkozi_id/edit',
        getNapkoziMW(objRepo),
        saveNapkoziMW(objRepo),
        renderMW(objRepo, 'napkozi_edit'));
    
    app.get('/cica_nezet',
        getCicakMW(objRepo),
        renderMW(objRepo, 'cica_nezet')); 
    
    app.use('/cica_nezet/:cica_id/edit',
        getCicaMW(objRepo),
        saveCicaMW(objRepo),
        renderMW(objRepo, 'cica_edit'));

    app.use('/cica_nezet/add',
        saveCicaMW(objRepo),
        renderMW(objRepo, 'cica_add'));
    
    app.get('/cica_nezet/:cica_id/remove',
        getCicaMW(objRepo),
        delCicaMW(objRepo),
        renderMW(objRepo, 'cica_nezet'));

};