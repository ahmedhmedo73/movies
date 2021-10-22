let person = {
    name: "ahmed",
    age: 21,
    salary: 5000,
    calcSalary: function() {
        let calcTax = () => {
            return this.salary * .1;
        }
        return this.salary - calcTax();
    }
}
console.log(person.calcSalary());