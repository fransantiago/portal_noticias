module.exports = {
    getNoticias(connection, cb, qtd = undefined){
        connection.query(`SELECT * FROM noticias ORDER BY not_data_criacao DESC${qtd ? ` LIMIT ${qtd}`: ''}`, cb);
    },

    getNoticia(connection, id, cb){
        connection.query(`SELECT * FROM noticias WHERE not_id = ${id}`, cb);
    },
    
    salvarNoticia(noticia, connection, cb){
        connection.query(`INSERT INTO noticias SET ?`, noticia, cb);
    }
}