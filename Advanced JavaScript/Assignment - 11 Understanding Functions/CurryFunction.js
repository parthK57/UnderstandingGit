var stringJoiner = function (string1, string2){
    console.log(string1+string2);
}

var greeter = stringJoiner.bind(this, "Hello ");
greeter("BABE!");

var curse = stringJoiner.bind(this, "Fuck ");
curse("You!");