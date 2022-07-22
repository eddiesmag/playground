// inheritance
// const  Employee = {
//     post: function() {
//         return "A Software Developer";
//     },
//     changeName: function(name) {
//         return this.name = name;
//     }
// }

// var eddy = Object.create(Employee);
// eddy.role = "writer";
// eddy.name = "buddy";

// var eddy = Object.create(Employee, {
//     name: {value: "buddy", writable: true},
//     role: {value: "writer"}
// })
// eddy.name = "paul";
// console.log(eddy);

function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function() {
    return this.name + " " + "is a content Creator"; 
}

var paul = new Employee("Paul", 234, 40000);
// console.log(paul);

function Programmer(name,id,salary, language) {
    Employee.call(this, name, id, salary, "JavaScript");
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;

var eddy = new Programmer("Eddy", 2345, 345000, "JavaScript");
// console.log(eddy);