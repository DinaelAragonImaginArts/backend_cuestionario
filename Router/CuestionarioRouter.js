import express from 'express';

import {
    obtenerRespuestas, obtenerResultados
} from '../Controllers/CuestionarioController.js';


const router = express.Router();

router.post('/', obtenerRespuestas);
router.get('/resultados', obtenerResultados)


export default router;