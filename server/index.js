import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express'
import dotenv from 'dotenv'
const { graphqlHTTP } = require('express-graphql')
import schema from './models/schema.js'

const app = express()
dotenv.config()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))