const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const { page = 1} = request.query;
        const { solucaoid } = request.body;

        const [count] = await connection('comentarios').count();

        const comentarios = await connection('comentarios')
        .join('usuarios', 'usuarios.userid', '=', 'comentarios.userid')
        .where('solucaoid', solucaoid)
        .limit(5)
        .offset(( page - 1 ) * 5)
        //.select(['comentarios.*', 'usuarios.name']);
        .select('*');

        response.header('Total-comentarios', count['count(*)']);

        return response.json(comentarios); 

},

    async create(request, response ) {
        const { solucaoid, comentario }  = request.body;
        const userid = request.headers.authorization;

        const [id] = await connection('comentarios').insert({
            comentario,
            userid,
            solucaoid,
        });
        return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
        const userid = request.headers.authorization;

        const comentarios = await connection('comentarios')
            .where('id', id)
            .select('userid')
            .first();
        
        if (comentarios.userid != userid) {
            return response.status(401).json({error : 'Operation not permited.'} );
        }

        await connection('comentarios').where('id',id).delete();
        
        return response.status(204).send();

    }
};