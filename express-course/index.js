/* 
const http = require("http");

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World")
});

server.listen(3000, ()=> {
    console.log("Serve On Port 3000")
})
*/
const express = require("express");
const app = express(); 
const morgan = require("morgan");

function logger(req, res, next){
    console.log(`Route Received ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

// te permite entender formatos JSON 
app.use(express.json());
app.use(morgan("dev"));

app.all("/user", (req, res, next) => {
    console.log("por aqui paso");
    next();
})

app.get("/user",(req, res) => {
    res.json({
        username: "cameron",
        lastname: "mahoma"
    })
});

app.post("/user/", (req, res) => {
    console.log(req.body);   

    res.send("Post Request Received")
});

app.put("/user", (req, res) => {
    res.send("Put Request Received")
});

app.delete("/user/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`)
});

app.listen(3000, () => {
   console.log("Hello World")  
});