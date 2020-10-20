class Employee {
    constructor(myName, myId, myEmail) {
    this.name = myName
    this.id = myId;
    this.email = myEmail;
    }
    getName() {
      return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
  }
  
  module.exports = Employee;