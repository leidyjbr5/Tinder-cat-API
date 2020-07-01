const express = require('express')
const app = express()
const cors = require('cors')

const catsRoutes = require('./routes/cats')
const interestRoutes = require('./routes/interest')

require('./connection/mongoConnection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/cats', catsRoutes)
app.use('/interests', interestRoutes)

app.listen(5001, () => console.log('Server Running'))
