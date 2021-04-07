import express from 'express'
import 'reflect-metadata'
//import cors from 'cors'
import routes from './routes'

import './database'

const app = express()

//app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('O servidor está funcionando!')
})