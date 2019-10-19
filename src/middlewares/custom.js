const { check } = require('express-validator');

module.exports = {
    validateFormFields: [
        check('not_titulo', 'Titulo é obrigatório.').not().isEmpty(),
        check('not_resumo', 'Resumo é obrigatório.').not().isEmpty(),
        check('not_resumo', 'Resumo deve conter entre 10 e 100 caracteres.').isLength({min:10, max:100}),
        check('not_autor', 'Autor é obrigatório.').not().isEmpty(),
        check('not_corpo', 'O corpo da notícia é obrigatório').not().isEmpty()
    ]
}