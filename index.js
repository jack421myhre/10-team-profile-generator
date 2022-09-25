const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Questions for user about profile setup
questions = [
    "Select the profile you would like to set up: ",
    "Employee name?",
    "Employee ID?",
    "Employee Email?",
];

// Creates the new employee class based on what the user selects
function createManager(res) {
    const manager = new Manager(res.userName, res.id, res.email, res.office);
    console.log(manager.officeNumber);
    return manager;
}

function createEngineer(res) {
    const engineer = new Engineer(res.userName, res.id, res.email, res.github);
    console.log(engineer.getGithub());
    return engineer;
}

function createIntern(res) {
    const intern = new Intern(res.userName, res.id, res.email, res.school);
    console.log(intern.getSchool());
    return intern;
}
// Checks for the type of employee the user selected
// Maybe move all of this into the when functions in the prompt????
function checkEmployeeType(res) {
    switch (res.employeeType) {
        case "Manager":
            return createManager(res);
        case "Engineer":
            return createEngineer(res);
        case "Intern":
            return createIntern(res);
    }
}

questionPrompt();
function questionPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                message: questions[0],
                choices: ["Manager", "Engineer", "Intern"],
                name: "employeeType",
            },
            {
                type: "input",
                message: questions[1],
                name: "userName",
            },
            {
                type: "input",
                message: questions[2],
                name: "id",
            },
            {
                type: "input",
                message: questions[3],
                name: "email",
            },
            {
                type: "input",
                message: "Office Number?",
                name: "office",
                when: (answers) => {
                    return answers.employeeType == "Manager";
                },
            },
            {
                type: "input",
                message: "Github Username?",
                name: "github",
                when: (answers) => {
                    return answers.employeeType == "Engineer";
                },
            },
            {
                type: "input",
                message: "School name?",
                name: "school",
                when: (answers) => {
                    return answers.employeeType == "Intern";
                },
            },
            // For each class, append class specific questions at the end of this question list
            // Or give each class their own questions separately if appending is not an option
        ])
        .then((answers) => {
            checkEmployeeType(answers);
        });
}
