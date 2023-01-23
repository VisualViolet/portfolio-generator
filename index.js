const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter a short bio:",
        name: "bio",
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Please enter your email:",
        name: "email",
    },
    {
        type: "list",
        message: "Choose a photo:",
        choices: ["Hamster", "Cat", "Dog", "Opossum", "Cow"],
        name: "photo",
    }
];

function writeHTML(filename, answers){
    fs.writeFile(filename, answers, (err) =>
        err? console.log(err): console.log("Porfolio successfully generated!")
    )};

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const filename =  `${answers.name.toLowerCase().split(' ').join('')}.html`;
        writeHTML(filename, generateHTML(answers));
    })
};

init();