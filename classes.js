class Student {
    constructor(name, id, age, role) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.role = role;
    }

    Org() {
         return "I am " + this.name +" from Help the world Org."
    }

    Profile() {
        return ("Full name: " + this.id + ": " + this.name + "\n" + "age: " + this.age + "\n" 
        + "role: " + this.role );
    }

    static add(b,n) {
        return b + n;
    }
}

class Student1 extends Student {
    constructor(name, id, age, role, language, section) {
        super(name, id, age, role);
        this.language = language;
        this.section = section;
    }
}

var paul = new Student1("Paul", 1234, 23, "Accounts", "JAVA", "Loans");
// console.log(paul);
// console.log(Student1.add(23,45));