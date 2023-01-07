class Student{
    static studentCount = 0;
    constructor(name, age, phoneNumber, boardMarks){
        this.name  = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        Student.studentCount++;
    }

    eligiblityChecker(){
        if(parseInt(this.boardMarks) >= 40) console.log(`${this.name} is eligible!`);
        else console.log(`${this.name} is not eligible!`);
    }
}

const student1 = new Student("Ram", 16, 9999999999, "40");
const student2 = new Student("Shyam", 16, 9999999999, "23");
const student3 = new Student("Vaibhav", 16, 8888888888, 76);
const student4 = new Student("Pranav", 16, 9899999999, 98);
const student5 = new Student("Yash", 16, 7777777777, 10);
student1.eligiblityChecker();
student2.eligiblityChecker();
student3.eligiblityChecker();
student4.eligiblityChecker();
student5.eligiblityChecker();
console.log(Student.studentCount);