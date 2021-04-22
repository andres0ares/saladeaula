import mongoose from 'mongoose'
//import Aula from './Aulas'

const AulaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    date: {
        type: Date,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    drive: {
        type: String,
        required: true
    }
})

const TurmaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    subheader: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    aulas: [ AulaSchema ]
})

module.exports = mongoose.models.Turma || mongoose.model('Turma', TurmaSchema);