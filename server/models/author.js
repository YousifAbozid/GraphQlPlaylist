import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
})

authorSchema.plugin(uniqueValidator)

const Author = mongoose.model('Author', authorSchema)

export default Author