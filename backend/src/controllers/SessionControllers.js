const connection = require('../database/connection');
const bcrypt = require('bcrypt');


module.exports = {
    async create(request, response) {

        const {
            email,
            password
        } = request.body;

        const usuario = await connection('usuarios')
            .where({
                'email': email
            })
            .select('name', 'userid', 'passwd')
            .first();

        if (!usuario) {
            return response.status(400).json({
                error: 'Usuário não encontrado.'
            });
        }

        if (!(await bcrypt.compare(password, usuario.passwd))) {
            return response.status(400).json({
                error: 'Senha inválida!'
            });
        }

        return response.json(usuario);

    },

};