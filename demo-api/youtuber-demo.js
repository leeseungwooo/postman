const express = require('express')
const app = express()
app.listen(1234)

let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개",
   
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개",
    
}

let youtuber3 = {
    channelTitle : "테오",
    sub : "54.8만명",
    videoNum : "726개",
  
}

let db = new Map()
var id = 1
db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)
app.get("/youtubers",function(req, res){
   
    db.forEach(function(youtuber){
        console.log(youtuber)
    })
    var json0bject = {}
    db.forEach(function(value,key){
        json0bject[key] = value;
    });
    res.json(json0bject)

})
app.get("/youtuber/:id",function (req, res){
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if (youtuber == undefined){
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })

    } else{
        res.json(youtuber)
    }



})
app.use(express.json())
app.post('/youtubers', (req, res) => {
    
    console.log(req.body)

    db.set(id++, req.body)

    res.json({
        message : db.get(4).channelTitle +"님, 유튜버 생활을 응원합니다!"
    })
})

app.delete('/youtubers/:id',function(req,res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else{
        const channelTitle = db.get(id).channelTitle
    db.delete(id)
    }
    
    res.json({
        message : `${channelTitle}__님 아쉽지만 우리 인연은 여기까지 인가요...`
    })
})


app.delete('/youtubers',function(req,res){
    if(db.size >= 1){
        db.clear()
        res.json({
            message : "전체 유튜버가 삭제되었습니다."
        })
    }else{
       res.json({
            message : "삭제할 유튜버가 없습니다."
        })
    }
    
})

app.put("/youtubers/:id",function (req, res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)
    var oldTitle = youtuber.channelTitle
    if(youtuber == undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else{
        var newTitle = req.body.channelTitle
        youtuber.channelTitle = newTitle
        db.set(id, youtuber)
        
    }
    
    res.json({
        message : `${oldTitle}님 채널명이 ${newTitle}로 수정되었습니다.`
    })
    

})