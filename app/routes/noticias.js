const noticiasController = require('../controllers/noticias');

module.exports = app => {
    app.get('/noticias', noticiasController.index);

    app.get('/noticia', noticiasController.show);
}