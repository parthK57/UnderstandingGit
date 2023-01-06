let multiply = function(x, y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(9);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(9);

let divide = function(x){
    return function(y){
        console.log(y/x);
    }
};

let divideByTwo = divide(2);
divideByTwo(10);