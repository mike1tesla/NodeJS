const express = require('express') // CJS
const path = require('path')
// import express from 'express' // ESM
const app = express()
const port = 3000
//config template engine
app.set('views', path.join(__dirname + '/views')) // lay ra duong dan tuyet doi
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/justin', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})