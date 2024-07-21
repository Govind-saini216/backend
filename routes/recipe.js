import express from 'express';
import Controller from '../controller/recipe.js';
import { Authenciate } from '../middlewears/Auth.js';

const router = express.Router();
// recipe add
router.post('/add', Authenciate , Controller.add);

// get all recipy
router.get('/', Controller.getallRecipy)

// get saved recipe
router.get('/saved', Controller.getallsavedRecipy)

// recipy find by id
router.get('/:id', Controller.getrecipybyid)

// get Recipy By user id
router.get('/user/:id',Controller.getRecipyByuserId)

//  Recipy saved by user id 
router.post('/:id', Authenciate,Controller.savedrecipebyid)


export default router;