var student = {age: 20};

var printAge = function(){
    return `Age is ${this.age}`;
}

var bound = printAge.bind(student);
console.log(bound());