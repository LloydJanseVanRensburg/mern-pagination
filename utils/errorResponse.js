class ErrorResponse extends Error {
    constructor(message, statusCode, name = "") {
      super(message);
      this.statusCode = statusCode;
      this.name = name;
    }
  }
  
  module.exports = ErrorResponse;