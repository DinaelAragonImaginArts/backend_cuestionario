import mongoose from 'mongoose';

const cuestionarioSchema = mongoose.Schema({
    code: {
        type: String,
        index: true,
        unique: true,
    },
    edad: {
        type: String,
        trim: true,
        required: true,
    },
    genero: {
        type: String,
        trim: true,
        required: true,
    },
    preguntaUno: {
        type: String,
        trim: true,
        required: true,
    },
    preguntaDos: {
        type: String,
        trim: true,
        required: true,
    },
    ipAddress: {
        type: String,
        trim: true,
        default: '',
    },
    ipCity: {
        type: String,
        trim: true,
        default: '',
    },
    ipState: {
        type: String,
        trim: true,
        default: '',
    },
    postal: {
        type: String,
        trim: true,
        default: '',
    },
},
{
    timestamps: true,
});

const Respuestas = mongoose.model('Respuestas', cuestionarioSchema);

export default Respuestas;