const express = require('express')
const app = express()

app.listen(1234)

app.get('/',function (req,res){

    res.send('Hello world')


})

let nodejsBook = {
    title : "Node.js를 공부해보자",
    price :  20000,
    description : "이 책 좋음 왜? 김송아가 지음"
}