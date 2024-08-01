import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end("you are requested for something")
    if(req.url =="/"){
        res.end("you r request for home ")

    }
    else if(req.url == "/samosa"){
        res.end("v dont have samosa")

    }
    else if(req.url == "/coldrink"){
        res.end("you have to pay 100 for that")
    }
    else if(req.url == "/profile"){
        res.end("welcome user")
    }
    else{
        res.end("404 not found")
    }
});

const port =1000;

server.listen(port,()=>console.log(`server is running on port ${port}`))





// console.log(http)