const Employee = require("./Employee");

class Manager extends Employee {
    constructor(userName, id, email, officeNumber = "001") {
        super(userName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return Manager.name;
    }
}

module.exports = Manager;
