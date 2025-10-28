const express = require('express')
const app = express()
const PORT =3000
let data = ["punidha"]
app.use(express.json())
app.get('/' ,(req,res) => {
    //console.log("Hit the endpoint" , req.method)
    res.send(`
        <body style = "background: pink;
        color: green;"> 
        <h1>DATA</h1>
        <p> ${JSON.stringify(data)} </p>
        <a href= "/welcome"> Welcomepage </a>
        </body>`)
})
app.get('/welcome', (req,res) => {
    //console.log("welcome endpoint")
    res.send(`
        <body>

        
        <h1> Welcomepage </h1>
        <a href="/"> Home </a>
        </body>`
    )
})
app.get ('/api/data', (req,res) => {
    console.log("for data")
    res.send(data)
})

app.post('/api/data' ,(req,res) => {
    const Newentry= req.body
    console.log(Newentry)
    data.push(Newentry.name)
    res.sendStatus(201)
})
app.delete('/api/data' , (req,res) =>{
    data.pop()
    res.sendStatus(203)
})
app.listen(PORT , () => console.log(`server runs on port: ${PORT}`))