const AppError = require("./app.error");

class ValidationError extends AppError {
  constructor(message) {
    super(message, 401);
  }
}

module.exports = ValidationError;
