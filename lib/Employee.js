class Employee {
    constructor(userName, id, email) {
        this.userName = userName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.userName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return Employee.name;
    }
}

module.exports = Employee;
