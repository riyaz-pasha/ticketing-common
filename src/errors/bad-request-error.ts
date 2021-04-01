import { CustomError } from "./custom-error";

class BadRequestError extends CustomError {
    statusCode: number = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }]
    }

}

export {
    BadRequestError
};
