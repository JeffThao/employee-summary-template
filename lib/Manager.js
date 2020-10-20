const Employee = require("./Employee");

class Manager extends Employee {
    constructor(myName, myId, myEmail, myNumber) {

    super(myName, myId, myEmail);
    this.officeNumber = myNumber;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
  }
  
  module.exports = Manager;