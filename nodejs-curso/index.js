// const math = require('./math.js')

// console.log(math.add(1,0));

const fs = require("fs");

fs.writeFile("./texto.txt", "linea uno", function(err){
    if (err){
        console.log(err);
    }
    console.log("Archivo creado");
});