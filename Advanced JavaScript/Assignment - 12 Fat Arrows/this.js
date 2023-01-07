this.book = "Immortals of Mehluha";
this.person = {
    book: "Harry Potter"
}
let Parth = {
    book: "Stary Messenger"
}

const namePrinter = function (rating){
    console.log(`Name of the book is ${this.book}.`);
    const review = () => {
        console.log(`Rating of ${this.book}: ${rating}`);
    }
    review();
}



namePrinter.call(this, 7);
namePrinter.call(this.person, 10);
namePrinter.call(Parth, 10);