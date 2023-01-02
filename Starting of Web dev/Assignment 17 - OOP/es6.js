// ES6 Version of OOP

class Bike{
    static count = 0;
    constructor(company, model, color){
        this.company = company;
        this.model = model;
        this.color = color;
        Bike.count++;
    }
    
    getCompany(){
        return this.company;
    }

    getModel(){
        return this.model;
    }
    
    getCount(){
        return Bike.count;
    }
}

const bike = new Bike("Kawasaki", "H2R", "Black");
const bike1 = new Bike("Royal Enfield", "Continental GT", "Silver");
console.log(bike.getCount());
