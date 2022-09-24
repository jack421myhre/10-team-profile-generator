const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(userName, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
