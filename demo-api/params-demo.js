const express = require('express')
const app = express()

app.listen(1234)

app.get('/products/:n', function(req, res){

    let number = parseInt(req.params.n) -10
    console.log(number)
    res.json({
        num : number
    })
})

app.get('/products/:n', function(req, res){

    res.json({
        channel : param.nickname
    })
})


app.get('/products/:n', function(req, res){
    const q = req.query
    console.log(q.v)
    console.log(q.t)
    res.json({
        video : q.v ,
        timeline : q.t
    })
})