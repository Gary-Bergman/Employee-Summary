const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

function manager() {
    console.log("Please build your team.");
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is your manager's id?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "managerNumber"
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
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engineerGithub"
        }
    ])

    const internQuestions = ([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
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
            }
        })




}

manager();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```