import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
})

const Book = mongoose.model('Book', bookSchema)

export default Book