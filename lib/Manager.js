const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(userName, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;
