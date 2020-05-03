import express from 'express'
import bodyParser from 'body-parser'

import { listings } from './listings'

const app = express()
const port = 9000

app.use(bodyParser.json())


app.get('/', (_req, res) => res.send('hello'))

app.get('/listings', (req, res) => {
    return res.send(listings)
})

app.post('/listings/delete', (req, res) => {
    const id: string = req.body.id
    const filteredItems = listings.filter(item => item.id !== id)
    return res.send(filteredItems)
})

app.listen(port)

console.log(`App running on port ${port}`)