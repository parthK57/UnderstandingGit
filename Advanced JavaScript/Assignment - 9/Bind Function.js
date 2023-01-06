var obj = {num:2};

var multiplyBy = function(a, b, c){
    return this.num*a*b*c;
}

var bound = multiplyBy.bind(obj);
console.log(bound(1,2,3));