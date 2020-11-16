import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    }
})

bookSchema.plugin(uniqueValidator)

const Book = mongoose.model('Book', bookSchema)

export default Book