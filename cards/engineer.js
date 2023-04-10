const Template = require('./template')
class Engineer extends Template {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;