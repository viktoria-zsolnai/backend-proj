/*const NapkoziModel = require('./models/napkozi');
const CicaModel = require('./models/cica');

let egynapkozi = new NapkoziModel();
egynapkozi.nev = "Ö";
egynapkozi.tulaj = "Sany";
egynapkozi.kapacitas = 5;
egynapkozi.save((err) => { 
    console.log(err);
    let egycica = new CicaModel();
    egycica.nev = "Golo";
    egycica.suly = 5;
    egycica.etel = "Kave";
    egycica.baratsagos = "Nem";
    egycica._napkozije = egynapkozi;
    egycica.save((err) => {
        console.log(err);
    });
});
*/


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static('static'));


// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function() {
    console.log('Hello :3000');
});