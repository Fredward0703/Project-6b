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
};

//step 4
let emp1 = [
    new Employee(`Jonny`, `Pharmacy`),
    new Employee(`Christian`, `Electricians`),
    new Employee(`Sergio`, `Welders`),
   new Employee(`Kevin`, `Electrician`)
];

let man1 = [
    new Manager(`Freddy`, `Pharmacy`, 5),
    new Manager(`Martin`, `Welders`, 8),
    new Manager(`Maddie`, `Engineering`, 9)
];

//step 5
class Company {
    constructor() {
        this.employees = []
    }
    addEmployee(Employee){
        let emp2 = new Employee(name)
        this.Employee.push(emp2)
        return emp2
    }
    get listEmployees(){
        return this.employees.length
    }
};