const Employee = require("./Employee");

class Intern extends Employee {
    constructor(userName, id, email, school = "NU") {
        super(userName, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern.name;
    }
}

module.exports = Intern;
