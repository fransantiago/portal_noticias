const connection = require('../../config/database');
const noticiasModel = require('../models/noticiasModel');

module.exports = {
    index(req, res){
        noticiasModel.getNoticias(connection, (error, results) => {
            if(error) throw error;
            res.render('noticias/noticias', { noticias: results });
        });
    },

    show(req, res){
        const { not_id } = req.query;

        noticiasModel.getNoticia(connection, not_id, (error, results) => {
            const noticia = !results.length ? {} : results[0];

            if(error) throw error;
            res.render('noticias/noticia', { noticia });
        });
    }
}