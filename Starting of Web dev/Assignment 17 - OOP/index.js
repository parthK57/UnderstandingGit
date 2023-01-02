// Before ES6
function Car(company, model, color){
    this.company = company;
    this.model = model;
    this.color = color;
    // this.getCompany = function() {
    //     return this.company;
    // }
}

Car.prototype.getCompany = function(){
    return this.company;
}

const ab = new Car("Lamborghini", "Aventador SVJ", "Black");
console.log(ab);