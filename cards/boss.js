const Template = require('./template')
class Boss extends Template {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }
}

module.exports = Boss;