const connection = require('../database/connection');


module.exports = {
    async index (request, response) {

        const userid = request.headers.authorization;
        const solucoes = await connection('solucoes')
        .where('userid', userid)
        .select('*');

        return response.json(solucoes);  

},

};