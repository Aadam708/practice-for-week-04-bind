// Your code here
class Employee {

    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;

    }

    sayName(){

        console.log(`Hello ${this.name}`);
    }

    sayOccupation(){
        console.log(`${this.name} is a ${this.occupation}`);
    }
}

module.exports = Employee;
