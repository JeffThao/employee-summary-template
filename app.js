const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArray = []

function createTeam() {

  function createManager() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office phone number?",
      },
    ]).then(function (managerAnswers) {
      const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
      employeeArray.push(manager);
      createMoreMembers();
    });
  }

  function createMoreMembers() {
    inquirer.prompt([
      {
        type: "list",
        name: "create",
        message: "Would you like to add more team members?",
        choices: ["Yes", "No"]
      }
    ]).then(function (answers) {
      if (answers.create === true) {
        createMembers()
      } else {
        createFinishedTeam()
      }
    });
  }

  function createMembers() {
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is the team member's role?",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ]).then(function (answers) {
      if (answers.role === "Manager") {
        createManager();
      } else if (answers.role === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is their id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is their email?",
          },
          {
            type: "input",
            name: "github",
            message: "What is the Engineer's Github account?",
          }
        ]).then(function (engineerAnswers) {
          const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
          employeeArray.push(manager);
          createMoreMembers();
        });
      } else (answers.role === "Intern"){
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is their id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is their email?",
          },
          {
            type: "input",
            name: "school",
            message: "What is the Intern's school?",
          }
        ]).then(function (internAnswers) {
          const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
          employeeArray.push(manager);
          createMoreMembers();
        });
      }
    }
  }
  
      //   function createFinishedTeam() {
      //   fs.readFile(__dirname + "./templates/main.html", function (err, data) {
      //     if (err) throw err;
      //   }
      //   )
      // }
  
  createManager();
}
  createTeam();