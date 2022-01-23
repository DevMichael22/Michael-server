const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    // res.setHeader('Content-type','text/html')
    // res.end('<div>I am happy I am coding this</div>')
    fs.readFile('./preshy.html', (error, data)=>{
        if(error){
            console.log('I no see the file Oooh')
        }else{
            res.setHeader('Content-type','text/html')
            res.end(data)
        }
    })
}).listen(2544, ()=>{
    console.log('listening to port')
})