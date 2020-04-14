const connection = require('../database/connection');


module.exports = {
    async create (request, response) {

        const {userid} = request.body;
    
        const usuario = await connection('usuarios')
        .where('userid', userid)
        .select('name')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'Usuário não encontrado.'});
        }

        return response.json(usuario);  

},

};