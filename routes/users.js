import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

//router.get('/', funcion para);
//metodo http que: para crear es POST, para leer es GET, para actualizar es PUT/PATCH y para eliminar es DELETE
//funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame al endpoint de manera que
//cada vez que realizo una peticion POST, se creara un recurso
//cada vez que realizo una peticion GET, se leeran recursos
//cada vez que realizo una peticion PUT/PATCH, se actualizara un recurso
//cada vez que realizo una peticion DELETE, se eliminara un recurso

//CREATE
router.post('/', create);

//GET
router.get('/', read);
router.get('/:id', readOne);
//el nombre del parametro puede ser cualquiera
//pero tanto aca en el enrutador, como en el controlador, los debo llamar de la misma forma
//EJEMPLO: aca y en controller id
//EJEMPLO: aca y en controller user_id
//EJEMPLO: aca y en controller userId

//UPDATE
router.put('/:u_id', update);

//DESTROY
router.delete('/:id', destroy);

export default router;