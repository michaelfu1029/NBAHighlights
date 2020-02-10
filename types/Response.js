class Response {
    constructor(data, errorMessage, status) {
      this.data = data;
      this.errorMessage = errorMessage;
      this.status = status;
    }
  }
  
module.exports = Response;