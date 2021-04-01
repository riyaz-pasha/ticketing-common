import { CustomError } from "./custom-error";

class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super("Not Authorized!.");

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: "Not authorized" }]
    }

}

export {
    NotAuthorizedError,
};
