import express from 'express';
import {
  create,
  getAll,
  getById,
  update,
  remove
} from '../controller/moviebook.controller.js';
import authenticate from '../middleware/jwt.token.middleware.js';

const router = express.Router();

router.use(authenticate);

router.post('/', create);            
router.get('/', getAll);             
router.get('/:id', getById);         
router.put('/:id', update);          
router.patch('/:id', update);        
router.delete('/:id', remove);       

export default router;
