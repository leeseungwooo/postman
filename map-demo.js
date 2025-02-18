const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id',function(req,res){
    let{id} = req.params
    id = parseInt(id)

    if(db.get(id)==undefined){
        res.json({
            message : "없는 상품입니다"
        })
    } else{
        product = db.get(id)
        product["id"] = id

        res.json(product)
    }
})