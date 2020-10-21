
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {

        super(name, id, email);
        this.officeNumber = number;

    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;