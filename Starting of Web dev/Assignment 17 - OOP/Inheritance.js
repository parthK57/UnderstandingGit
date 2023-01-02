class VolksWagan{
    static count = 0;
    constructor(company, model, color){
        this.company = company;
        this.model = model;
        this.color = color;
        VolksWagan.count++;
    }

    getCompany(){
        console.log(this.company);
    }

    getModel(){
        console.log(this.model);
    }

    getColor(){
        console.log(this.color);
    }

    getCount(){
        console.log(VolksWagan.count);
    }
}

class Porsche extends VolksWagan{
    static countPorsche = 0;
    constructor(company, model, color, licencePlate, purchasedDate){
        super(company, model, color);
        this.licencePlate = licencePlate;
        let dateArr = purchasedDate.split("-");
        this.purchasedDate = new Date(parseInt(dateArr[2]), parseInt(dateArr[1]), parseInt(dateArr[0]));
        Porsche.countPorsche++;
    }

    getPurchasedDate(){
        console.log(this.purchasedDate);
    }

    getLicencePlate(){
        console.log(this.licencePlate);
    }

    getCount(){
        console.log(Porsche.countPorsche);
    }
}

const car = new VolksWagan("VolksWagen", "Polo GT", "Red");
const car1 = new Porsche("Porsche", "GT3", "Dark Silver", "MH-13-DZ-5757", "15-07-2025");

// car.getCompany();
console.log(car1);