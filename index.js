const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamPageHtml = require("./src/teamPageHtml");

// Holds all team members so we can iterate through and populate on the page
const myTeam = [];

// Questions for user about profile setup
questions = [
    "Select the team member you would like to set up: ",
    "Employee name?",
    "Employee ID?",
    "Employee Email?",
];

managerPrompt();
function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "userName",
            },
            {
                type: "input",
                message: "What is the team manager's ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the team manager's email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "officeNumber",
            },
        ])
        .then((response) => {
            let { userName, id, email, officeNumber } = response;
            const newManager = new Manager(userName, id, email, officeNumber);
            myTeam.push(newManager);
            questionPrompt();
        });
}

function questionPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                message: questions[0],
                choices: ["Engineer", "Intern"],
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
                message: "Github Username?",
                name: "github",
                when: (response) => response.employeeType === "Engineer",
            },
            {
                type: "input",
                message: "School name?",
                name: "school",
                when: (response) => response.employeeType === "Intern",
            },
            {
                type: "confirm",
                message: "Do you want to add another team member?",
                name: "addEmployee",
            },
            // Add question to add more employees
            // For each class, append class specific questions at the end of this question list
            // Or give each class their own questions separately if appending is not an option
        ])
        .then((response) => {
            let newEmployee;
            let {
                employeeType,
                userName,
                id,
                email,
                github,
                school,
                addEmployee,
            } = response;
            // After object destructuring, this checks for the employeeType,
            // creates the employee object, and pushes that employee to the myTeam array
            if (employeeType === "Engineer") {
                newEmployee = new Engineer(userName, id, email, github);
                myTeam.push(newEmployee);
            } else if (employeeType === "Intern") {
                newEmployee = new Intern(userName, id, email, school);
                myTeam.push(newEmployee);
            }

            addEmployee ? questionPrompt() : generateHtml();
        });
}

function generateHtml() {
    fs.writeFile("./dist/index.html", teamPageHtml.newHtml(), (err) => {
        err ? console.error(err) : console.log("success");
    });

    for (let i = 0; i < myTeam.length; i++) {
        switch (myTeam[i].getRole()) {
            case "Manager":
                fs.appendFile(
                    "./dist/index.html",
                    teamPageHtml.managerHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Manager card created!");
                    }
                );
                break;
            case "Engineer":
                fs.appendFile(
                    "./dist/index.html",
                    teamPageHtml.engineerHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Engineer card created!");
                    }
                );
                break;
            case "Intern":
                fs.appendFile(
                    "./dist/index.html",
                    teamPageHtml.internHtml(myTeam[i]),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("Intern card created!");
                    }
                );
                break;
            default:
                fs.writeFile(
                    "./dist/index.html",
                    teamPageHtml.closingHtml(),
                    (err) => {
                        err
                            ? console.error(err)
                            : console.log("HTML POPULATED.");
                    }
                );
                break;
        }
    }
}
