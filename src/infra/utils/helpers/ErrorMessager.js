class ErrorMessager extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}

module.exports = ErrorMessager;