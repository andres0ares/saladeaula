import mongoose from 'mongoose'

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

module.exports = mongoose.models.Aula || mongoose.model('Aula', AulaSchema);