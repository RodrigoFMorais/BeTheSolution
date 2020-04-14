const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(cors));
app.use(express.json());  /* Utilizar o o formato json para as requisições*/  

app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar uma informações do back-end
  * POST: Criar uma informaçõao no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota apôs "?" (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * From users
     * Query Builder: tabela('users').select('*').where()
     */

app.listen(3333);
