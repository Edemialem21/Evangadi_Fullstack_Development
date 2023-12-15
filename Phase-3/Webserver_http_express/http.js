            // constractor review
            // function Person(name, age){
            //     this.name = name;
            //     this.age = age;
            // }
            // const age = new Person("Edemialem", 28);

            // function IncomingMessage(requestPath, additional){
            //     this.requestPath = requestPath;
            // }
            // const req = new IncomingMessage();
            // const res = new 

const http = require("http");


// function requestHandler(req, res){
//     // what ever we want
// }
// 
// we can create anynomeos function
const server = http.createServer((req, res)=>{
    console.log(req);
    console.log(res);

    console.log("Request Received");
    // using end method if there is request it respond 
    res.end("Hello Edemialeem, how u doing. Well done!")
});

// the call back function is optional it is just for confirmation only
server.listen(7897, ()=>{
    console.log("It is listining");
}); 


// ################## using the client request of the url how to respond using h1 header file

const server2 = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === "/"){
        res.write("<h1>Thist is home page.<h1>");
        res.end();
    }else if(req.url === "/about"){
        res.write("<h1>Thist is about page.<h1>");
        res.end();
    }else{
        res.write("<h1>page not found.<h1>");
        res.end();
    }
})

server2.listen(4000, ()=>{
    console.log("It is listining");
});

// ###########################################
const serverMyStaticSite = http.createServer((req, res)=>{
    let filepath = req.url;
    console.log(filepath);

    if (filepath == "/"){
        filepath = "/index.html";
    }

    let requestedFile = "./teste" + filepath;

    fs.readFile(requestedFile, (err, content)=>{
        if(err){
            requestedFile = "./teste/notFound.html";
            fs.readFile(requestedFile, (err, content)=>{
                res.writeHead(400, {"content-type":"text/html"});
                res.write(content);
                res.end;
            });
        }else{
            res.writeHead(200, {"content-type": "text/html"});
            res.write(content);
            res.end();
        }
    });
});
serverMyStaticSite.listen(500, ()=>{
    console.log("runnung on 5000");
})