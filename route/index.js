const renderMW = require("../middlewares/renderMW");
const getNapkozikMW = require("../middlewares/NapkoziMW/getNapkozikMW");
const getNapkoziMW = require("../middlewares/NapkoziMW/getNapkoziMW");
const saveNapkoziMW = require("../middlewares/NapkoziMW/saveNapkoziMW");
const getCicakMW = require("../middlewares/CicaMW/getCicakMW");
const getNapkoziCicakMW = require("../middlewares/CicaMW/getNapkoziCicakMW");
const getCicaMW = require("../middlewares/CicaMW/getCicaMW");
const saveCicaMW = require("../middlewares/CicaMW/saveCicaMW");
const delCicaMW = require("../middlewares/CicaMW/delCicaMW");

const NapkoziModel = require('../models/napkozi');
const CicaModel = require('../models/cica');

module.exports = function (app) {
  const objRepo = {

    NapkoziModel: NapkoziModel,
    CicaModel: CicaModel

  };

  app.use(
    "/napkozi_nezet/add",
    saveNapkoziMW(objRepo),
    renderMW(objRepo, "napkozi_add")
  );

  app.get(
    "/napkozi_nezet/:napkozi_id/cicak",
    getNapkoziMW(objRepo),
    getNapkoziCicakMW(objRepo),
    renderMW(objRepo, "napkozi_cicai")
  );

  app.use(
    "/napkozi_nezet/:napkozi_id/edit",
    getNapkoziMW(objRepo),
    saveNapkoziMW(objRepo),
    renderMW(objRepo, "napkozi_edit")
  );

  app.get(
    "/napkozi_nezet",
    getNapkozikMW(objRepo),
    renderMW(objRepo, "napkozi_nezet")
  );

  app.use(
    "/cica_nezet/:cica_id/edit",
    getNapkozikMW(objRepo),
    getCicaMW(objRepo),
    saveCicaMW(objRepo),
    renderMW(objRepo, "cica_edit")
  );


  app.use(
    "/cica_nezet/add",
    getNapkozikMW(objRepo),
    saveCicaMW(objRepo),
    renderMW(objRepo, "cica_add")
  );

  app.get(
    "/cica_nezet/:cica_id/remove",
    getCicaMW(objRepo),
    delCicaMW(objRepo),
    renderMW(objRepo, "cica_nezet")
  );

  app.get("/cica_nezet", 
  getCicakMW(objRepo), 
  renderMW(objRepo, "cica_nezet"));

  app.get("/", renderMW(objRepo, "index"));
};
