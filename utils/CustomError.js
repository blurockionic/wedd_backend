class CustomError extends Error{
    constructor(message,statusCode,success) {
        super(message);
        this.statusCode = statusCode;
        this.success = success
        
    }
}

export default CustomError;