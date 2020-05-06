const express = require('express');

const UsuariosControllers = require('./controllers/UsuariosControllers');
const SolucoesControllers = require('./controllers/SolucoesControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SessionControllers');
const ComentarioControllers = require('./controllers/ComentarioControllers');
const LikeControllers = require('./controllers/LikeControllers');

const routes = express.Router();

routes.get('/register' , UsuariosControllers.index);
routes.post('/register' , UsuariosControllers.create);

routes.get('/solucoes' , SolucoesControllers.index);
routes.post('/solucoes' , SolucoesControllers.create);
routes.delete('/solucoes/:id' , SolucoesControllers.delete);

routes.get('/profile' , ProfileControllers.index);

routes.post('/session' , SessionControllers.create);

routes.post('/comentarios' , ComentarioControllers.create);
routes.get('/comentarios' , ComentarioControllers.index);
routes.delete('/comentarios/:id' , ComentarioControllers.delete);

routes.post('/like' , LikeControllers.like); 

module.exports = routes;
