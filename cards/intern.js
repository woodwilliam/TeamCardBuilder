const Template = require('./template')
class Intern extends Template {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;