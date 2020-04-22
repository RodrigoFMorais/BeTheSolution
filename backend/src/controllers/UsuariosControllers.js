const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
            const users = await connection('usuarios').select('*');
            return response.json(users);  
    },

    async create(request, response) {

        const { name, passwd, email, city, uf, dnasc } = request.body;
    
        const userid = crypto.randomBytes(4).toString('HEX');
        
        await connection('usuarios').insert({
            userid,
            name,
            passwd,
            email,
            city,
            uf,
            dnasc,
        });
    
        return response.json({ userid });
    }

};