const { body } = require('express-validator');
const adminController = require('../controllers/admin');
const middlewares = require('../../src/middlewares/custom');

const isDate = value => {
    if(!value) throw new Error('A data da notícia deve ser fornecida.');
    //https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery/35413963#35413963
    if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) throw new Error('A data tem um formato inválido.');;
  
    const date = new Date(value);
    if (!date.getTime()) throw new Error('A data é inválida.');;
    
    const dateToValidate = date.toISOString().slice(0, 10);
    if(!dateToValidate === value) throw new Error('A data da notícia é obrigatória');

    return true;
}

module.exports = app => {
    app.get('/formulario_inclusao_noticia', adminController.index);

    app.post('/noticias/salvar', middlewares.validateFormFields, body('not_data_criacao').custom(isDate), adminController.store);
}