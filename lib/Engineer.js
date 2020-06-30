// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, GitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.GitHub = GitHub;
}

Employee.prototype.getGitHub = function () {
    return this.GitHub;
}

module.exports = Engineer;