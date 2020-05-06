const crypto = require('crypto');
const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async index(request, response) {
        const users = await connection('usuarios').select('*');
        return response.json(users);
    },

    async create(request, response) {
        const {
            name,
            password,
            email,
            whatsapp,
            city,
            uf,
            dnasc
        } = request.body;

        const userid = crypto.randomBytes(4).toString('HEX');

        const passwd = await bcrypt.hash(password, 12);

        await connection('usuarios').insert({
            userid,
            name,
            passwd,
            email,
            whatsapp,
            city,
            uf,
            dnasc,
        });

        return response.json({
            userid
        });
    },
};