const Boss = require('../cards/boss');
const Engineer = require('../cards/engineer');
const Intern = require('../cards/intern');
const inquirer = require('inquirer');
const qs = require('./prompts');
const generateHtml = require('./generateHtml');
let newBoss = [];
let newEngineer = [];
let newIntern = [];

function createMgr(fileName, data) {
    inquirer
        .prompt(qs.bossQs)
        .then((response) => {
            let mgr = new Boss(response.bossName, response.bossId, response.bossEmail, response.telly,)
            newBoss.push(mgr);
            console.log("new boss has arrived!");
            inquirer
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        });
        
}

function createEng(fileName, data) {
    inquirer
        .prompt(qs.engineerQs)
        .then((response) => {
            let engineer = new Engineer(response.eName, response.eId, response.eEmail, response.github) 
            newEngineer.push(engineer);
            console.log("new engineer joining the team!");
            inquirer
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        })

}

function createInt(fileName, data) {
    inquirer
        .prompt(qs.internQs)
        .then((response) => {
            let intern = new Intern(response.iName, response.iId, response.iEmail, response.school,) 
            newIntern.push(intern);
            console.log("unpaid labor! gotta love it");
            inquirer
                .prompt(qs.nextSteps)
                .then((response) =>
                optionsResponse(response)
        );
        }).catch(error =>{
            console.log(error);
        })
}

function optionsResponse(response) {
    console.log(response.options);
    let egg = response.options
    if (egg == 'ADD AN ENGINEER!') {
        createEng();
    } else if (egg == 'ADD AN INTERN!') {
        createInt();
    } else if (egg == 'FINISH BUILDING MY TEAM') {
        //generateMarkdown function of new cards
        generateHtml(newBoss, newEngineer, newIntern)
    } else {console.log('hmmmmm...something is wrong')
    }
}

function init() {
    createMgr();
}

module.exports = {init, createMgr};