/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to Jaswal Toyota.')
})

app.get('/about', (req, res) =>{
    res.send('We sell Toyota cars worldwide.')
})

app.get('/contact', (req, res) =>{
    res.send('6284668337')
})

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
*/

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//const rohanMiddleware = (req,res,next) => {
//    console.log(req)
//    next()
//}

app.use(express.static(path.join(__dirname, "public")))
//app.use(rohanMiddleware)

app.get('/hello/:name', (req, res) => {
    res.send('Welcome to Detailing Orophiles.'+ req.params.name)
})

app.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname, 'index.html'))
    //res.status(500)
    res.json({"anshika": 20})
})

app.get('/contact', (req, res) => {
    res.send('jaswalrohan885@gmail.com , 6284668337')
})

app.listen(port , () => {
    console.log(`App listening at http://localhost:${port} and running on an good average.`)
})

//express framework saves a lot of time and we don't have to write custom codes(eg: for 404);