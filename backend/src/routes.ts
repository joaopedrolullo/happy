import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// MVC
    // Model
    // Views
    // Controllers

// Rota = conjunto
// Recurso = usuário

// Método HTTP: GET, POST, PUT, DELETE
    // GET    = Buscar uma informação (Lista, item)
    // POST   = Criando/Inserindo uma informação
    // PUT    = Editando uma informação
    // DELETE = Deletando uma informação

// Parâmetros
    // Query Params: http://localhost:3333/users?search=joao
    // Route Params: http://localhost:3333/users?1 (Identificar um recurso)
    // Body: http://localhost:3333/users
    
// Padrão Controller: index. show, create, update, delete

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;