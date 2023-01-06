let obj = { num: 22};

var divideByDivider = function(divider){
    return this.num/divider;
}

console.log(divideByDivider.call(obj, 11));