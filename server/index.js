import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const { graphqlHTTP } = require('express-graphql')
import schema from './models/schema.js'

dotenv.config()

const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => {
        console.log('can\'t connect to MongoDB')
        console.log(error.message)
    })

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))