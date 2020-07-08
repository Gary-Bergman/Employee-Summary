const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// validators
const valNum = /^[1-9]\d*$/;
const valEmail = /\S+@\S+\.\S+/;
const valName = /^[A-Za-z]+$/;

var employees = [];

function manager() {

    console.log("Please build your team.");
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your manager's name?",
                name: "managerName",
                validate: answers => {
                    if (answers.match(valName)) {
                        return true;
                    }
                    return "Please enter a valid name.";
                }
            },
            {
                type: "input",
                message: "What is your manager's id?",
                name: "managerId",
                validate: answers => {
                    if (answers.match(valNum)) {
                        return true;
                    }
                    return "Please enter at least one number.";
                }
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail",
                validate: answers => {
                    if (answers.match(valEmail)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "managerNumber",
                validate: answers => {
                    if (answers.match(valNum)) {
                        return true;
                    }
                    return "Please enter at least one number.";
                }
            }
        ])
        .then(function (answers) {
            var newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
            employees.push(newManager);
            var exit = false;

            moreEmployees();

        })
}


function moreEmployees() {

    const engineerQuestions = ([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName",
            validate: answers => {
                if (answers.match(valName)) {
                    return true;
                }
                return "Please enter a valid name.";
            }
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engineerId",
            validate: answers => {
                if (answers.match(valNum)) {
                    return true;
                }
                return "Please enter at least one number.";
            }
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail",
            validate: answers => {
                if (answers.match(valEmail)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engineerGithub",
            validate: answers => {
                if (answers !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ])

    const internQuestions = ([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName",
            validate: answers => {
                if (answers.match(valName)) {
                    return true;
                }
                return "Please enter a valid name.";
            }
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId",
            validate: answers => {
                if (answers.match(valNum)) {
                    return true;
                }
                return "Please enter at least one number.";
            }
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail",
            validate: answers => {
                if (answers.match(valEmail)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool",
            validate: answers => {
                if (answers.match(valName)) {
                    return true;
                }
                return "Please enter a valid name.";
            }
        }
    ])

    inquirer
        .prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                default: "(Use arrow keys)",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
                name: "addEmployee"
            }
        ]).then(function (answers) {
            if (answers.addEmployee === "Engineer") {
                inquirer
                    .prompt(engineerQuestions).then(function (answers) {
                        var newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                        employees.push(newEngineer);

                        moreEmployees();
                    });

            } else if (answers.addEmployee === "Intern") {
                inquirer
                    .prompt(internQuestions).then(function (answers) {
                        var newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                        employees.push(newIntern);

                        moreEmployees();
                    });

            } else {
                console.log("Thanks for your selection(s)!")
                const result = render(employees);
                console.log(result);

                fs.writeFile("team.html", result, err => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Your file was successfully written to team.html!")
                })
            }
        })
}

manager();
