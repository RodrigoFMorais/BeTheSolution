const connection = require('../database/connection');

module.exports = {
    
    async like(request, response ) {

        const { solucaoid, like }  = request.body;
        const userid = request.headers.authorization;

        const exist = await connection('likes')
        .where({'userid': userid, 'solucaoid': solucaoid })
        .select('like')
        .first();

        if(!exist) {
            await connection('likes').insert({
                like,
                userid,
                solucaoid,
            });
            //return response.json({ msg: 'Não existia então criou'});
        }

        await connection('likes')
        .where({'userid': userid, 'solucaoid': solucaoid })
        .update('like', like);
        
        //return response.json({ msg: 'Já existia, então modificou'});
    },


};