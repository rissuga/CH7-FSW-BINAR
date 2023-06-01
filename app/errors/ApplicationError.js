class ApplicationError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = this.constructor.name;

    Object.defineProperty(this, 'details', {
      value: details,
      enumerable: true,
      writable: true,
      configurable: true
    });

    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        details: this.details,
      }
    }
  }
}

module.exports = ApplicationError;
