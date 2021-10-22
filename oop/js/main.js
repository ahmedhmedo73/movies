//protype
// let person = function(id, name, age, gender, salary) {
//     this.id = id;
//     this.username = name;
//     this.age = age;
//     this.gender = gender;
//     this.salary = salary;
// }
// person.prototype.welcome = function() {
//     console.log('hi');
// }

//ecs 6
//sugar syntax
class Person {
    constructor(id, name, age, gender, salary) {
        this.id = id;
        this.username = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
    welcome() {
        console.log('hi');
    }
}
//inhertince
class Engineer extends Person {
    constructor(id, name, age, gender, salary, dept, uni) {
        super(id, name, age, gender, salary);
        this.dept = dept;
        this.uni = uni;
    }
}

let ali = new person("C344", "ali hassn ibrahim", 34, "male", 3000);
let mai = new person("C344", "mai ibrahim", 32, "female", 4000);
let sayed = new person("C344", "sayed hassn ibrahim", 36, "male", 5000);