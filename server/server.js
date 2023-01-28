import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import template from './../template'
import devBundle from './devBundle'
import config from '../config/config'


const CURRENT_WORKING_DIR = process.cwd()
const app = express()

devBundle.compile(app)

let port = config.port || 3000

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.get('/', (req, res) => {
    res.status(200).send(template())
})

try {
    mongoose.connect(config.mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('mongo is okey')
} catch (error) {
    console.log(error)
}

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info(`Server started on port ${port}`)
})