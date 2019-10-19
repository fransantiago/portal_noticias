const { validationResult } = require('express-validator');
const noticiasModel = require('../models/noticiasModel');
const connection = require('../../config/database');

module.exports = {
    index(req, res){
        res.render('admin/form_add_noticia', {erros: undefined, noticia: {}});
    },

    store(req, res){
        const noticia = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.render('admin/form_add_noticia', {erros: errors.array(), noticia});
        }

        noticiasModel.salvarNoticia(noticia, connection, (error, results) => {
            if(error) throw error;

            res.redirect('/noticias');
        });
    }
}