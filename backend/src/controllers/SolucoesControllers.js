const connection = require('../database/connection');


module.exports = {
    async index (request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('solucoes').count();

        const solucoes = await connection('solucoes')
        .join('usuarios', 'usuarios.userid', '=', 'solucoes.userid')
        .limit(5)
        .offset(( page - 1 ) * 5)
        .select('*');
        
        response.header('Total-Solucoes', count['count(*)']);

        return response.json(solucoes);  

},

    async create(request, response ) {
        const { titulo, problemaDescricao, problemaSolucao}  = request.body;
        const userid = request.headers.authorization;

        const [id] = await connection('solucoes').insert({
            titulo,
            problemaDescricao,
            problemaSolucao,
            userid,
        });
        return response.json({id});
    },


    async delete(request, response) {
        const {id} = request.params;
        const userid = request.headers.authorization;

        const solucao = await connection('solucoes')
            .where('id', id)
            .select('userid')
            .first();
        
        if (solucao.userid != userid) {
            return response.status(401).json({error : 'Operation not permited.'} );
        }

        await connection('solucoes').where('id',id).delete();
        
        return response.status(204).send();

 

    }
};