const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(userName, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
