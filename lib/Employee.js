// TODO: Write code to define and export the Employee class


function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee"
}

Employee.prototype.getName = function () {
    
}

Employee.prototype.getRole = function () {
    return this.role;
}