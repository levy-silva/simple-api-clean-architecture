const notString = require("../../infra/utils/validators/notString.js");
const isRequired = require("../../infra/utils/validators/isRequired.js");
const notRequired = require("../../infra/utils/validators/notRequired.js");
const notValidEmail = require("../../infra/utils/validators/notValidEmail.js");
const MaxlengthError = require("../../infra/utils/messages/MaxlengthError.js");
const MinlengthError = require("../../infra/utils/messages/MinlengthError.js");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const InvalidEmailError = require("../../infra/utils/messages/InvalidEmailError.js");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan.js");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError.js");
const InverseStringTypeError = require("../../infra/utils/messages/InverseStringTypeError.js");

class Email {
    constructor(email) {
        this.email = email;
    }

    execute({ required = true }) {
        const email = this.email, boolean = required, path = "email", min = 5, max = 254;
        if (notRequired(email, boolean)) return;
        if (notString(email)) throw new ValidationHandler(new InverseStringTypeError(path));
        if (notValidEmail(email)) throw new ValidationHandler(new InvalidEmailError(email));
        if (lengthLessThan(email, min)) throw new ValidationHandler(new MinlengthError(path, min));
        if (lengthGraterThan(email, max)) throw new ValidationHandler(new MaxlengthError(path, max));
        if (isRequired(email, boolean)) throw new ValidationHandler(new MissingPropertyError(path));
        else return email;
    }
}

module.exports = Email;