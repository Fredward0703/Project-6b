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
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    listEmployees(){
        for (const emp of this.employees) {
            console.log(emp.describe());
        }
    }
}

// Step 5: Create a class called Company with a property employees (an array). Add methods:
// addEmployee(employee) – adds an employee to the array
// listEmployees() – logs each employee’s description
// Step 6: Instantiate a Company object, add both employee and manager instances, and call listEmployees().