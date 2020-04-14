const express = require('express');

const UsuariosControllers = require('./controllers/UsuariosControllers');
const SolucoesControllers = require('./controllers/SolucoesControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionControllers = require('./controllers/SessionControllers');

const routes = express.Router();

routes.get('/users' , UsuariosControllers.index);
routes.post('/users' , UsuariosControllers.create);

routes.get('/solucoes' , SolucoesControllers.index);
routes.post('/solucoes' , SolucoesControllers.create);
routes.delete('/solucoes/:id' , SolucoesControllers.delete);

routes.get('/profile' , ProfileControllers.index);

routes.post('/session' , SessionControllers.create);

module.exports = routes;
