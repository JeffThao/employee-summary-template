const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(myName, myId, myEmail, myGithub) {
     
    super(myName, myId, myEmail);
    this.github = myGithub;
    }
  
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
  }
  
  module.exports = Engineer;