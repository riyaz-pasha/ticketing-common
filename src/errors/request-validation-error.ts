import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

class RequestValidationError extends CustomError {

    statusCode = 400;

    constructor(public reasons: ValidationError[]) {
        super("Invalid email or password");

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.reasons.map(error => ({ message: error.msg, field: error.param }));
    }
}

export {
    RequestValidationError,
}