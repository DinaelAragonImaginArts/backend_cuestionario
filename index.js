import express from "express";
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import cors from 'cors';
import CuestionarioRouter from './Router/CuestionarioRouter.js'

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();
//Configuracion de cors
const whileList = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if (whileList.includes(origin)) {
            //Puede consultar la api
            callback(null, true);
        } else {
            //No esta permitido
            callback(new Error('Error de Cross'))
        }
    },

};
app.use(cors(corsOptions));

app.use('/cuestionario', CuestionarioRouter);
const PORT = process.env.PORT || 4000;

//Listen server to console
const servidor = app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})