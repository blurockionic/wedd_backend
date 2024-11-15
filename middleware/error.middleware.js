import CustomError from "../utils/CustomError.js";

const errorMiddleware = (err, _, res, next) => {
    if (err instanceof CustomError) {
        // Handling custom error
        res.status(err.statusCode).json({
            error: {
                message: err.message
            }
        });
    } else {
        // Handling generic errors
        res.status(500).json({
            error: {
                message: "An unexpected error occurred"
            }
        });
    }
};

export default errorMiddleware;
