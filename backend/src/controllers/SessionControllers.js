const connection = require('../database/connection');


module.exports = {
    async create (request, response) {

        const {email, passwd} = request.body;

        const usuario = await connection('usuarios')
        .where({'email': email,'passwd': passwd} )
        .select('name','userid')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'Usuário não encontrado.'});
        } 

        return response.json(usuario);  

},

};