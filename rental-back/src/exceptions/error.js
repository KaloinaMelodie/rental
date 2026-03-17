class AppError extends Error {
    constructor(message, statusCode = 500, details = null) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends AppError {
    constructor(message, details = null) {
        super(message, 400, details);
    }
}

class NotFoundError extends AppError {
    constructor(message, details = null) {
        super(message, 404, details);
    }
}

class ForbiddenError extends AppError {
    constructor(message, details = null) {
        super(message, 403, details);
    }
}

class ValidationError extends BadRequestError {
    constructor(message, details = null){
        super(message, details);
    }
}

module.exports = {
    AppError,
    BadRequestError,
    NotFoundError,
    ForbiddenError,
    ValidationError
};