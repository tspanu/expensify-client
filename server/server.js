const path = require('path')
const express = require('express')
const app = express()
const prodPath = path.join(__dirname, '..', 'prod')
const port = process.env.PORT || 3000

app.use(express.static(prodPath))

app.get('*', (request, response) => {
    response.sendFile(path.join(prodPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up!')
})