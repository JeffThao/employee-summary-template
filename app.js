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

function mainMenu() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
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
      type: "list",
      message: "What is their role?",
      name: "role",
      choices: [
        "manager",
        "engineer",
        "intern"
      ]
      
    }
  ]);
}

mainMenu();

