const noticiasModel = require('../models/noticiasModel');
const connection = require('../../config/database');

module.exports = {
    index(req, res){
        noticiasModel.getNoticias(connection, (error, results) => {
            if(error) throw error;
            res.render('home/index', { noticias: results });
        }, 5);
    }
}