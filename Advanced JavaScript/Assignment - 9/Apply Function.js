var obj = {num:2};

var multiplyBy = function(a, b, c){
    return this.num*a*b*c;
}

var arr = [2,4,6];
console.log(multiplyBy.apply(obj, arr));