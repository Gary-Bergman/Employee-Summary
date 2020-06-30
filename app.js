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
inquirer
    .prompt([
        {
            message: "Please build your team",
        },
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
        var newManager = new Manager(answers.managerName, answers.managerId, answer.managerEmail, managerNumber);
        employees.push(newManager);
        var exit = false;
    }
const result = render.render(employees);


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

// Recursion example
function moreEmployees() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                default: "(Use arrow keys)",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
                name: "addEmployee"
            },
        ]).then(function (addEmployee) {
            if (addEmployee.choices === "Engineer") {
                inquirer
                    .prompt(engineerQuestions);
                moreEmployees();

            } else if (addEmployee.choices === "Intern") {
                inquirer
                    .prompt(internQuestions);
                moreEmployees();
            }
        })



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
            name: "engineerGitHub"
        }

    ]).then(function (answers) {
        var newEngineer = new Employee(answers.engineerName, answers.engineerId, answer.engineerEmail, engineerGitHub);
        employees.push(newManager);
        var exit = false;
    }

}


        // Create engineer inquirer prompt
        inquirer // 3
    var newEngineer = new Engineer(answers.name...)
    // push to employees
    moreEmployees();
    // B. Intern
    // Create an intern inquirer
    inquirer // 4
    var newIntern = new Intern(answers.name...)
    moreEmployees();
    // push to employees
    // C. I don't want to add anymore
    // Escape the loop
}
moreEmployees();
