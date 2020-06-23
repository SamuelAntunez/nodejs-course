function add (x1, x2){
    return x1 + x2;
};

function substract (x1, x2){
    return x1 - x2;
}

function multiply (x1, x2){
    return x1 * x2;
}

function divide (x1, x2){
    if (x2 == 0){
        console.log ("no se puede dividir")
    }
    return x1 / x2;
};

exports.add = add;