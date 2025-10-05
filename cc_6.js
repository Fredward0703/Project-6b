//starting off with step 2

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in ${this.department}`
    }
}

//step3 
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department)
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} works at ${this.department} and handles ${this.teamSize} people`
    }
}

//step 4