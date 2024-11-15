import CustomError from "../utils/CustomError.js";

const roleMiddleware = (role) => (req, _, next) => {

    // Extract the role from the request object

    const roleFromUserObject = req.user.role;

    // Check if the user's role includes the required role

    if (!roleFromUserObject.includes(role)) {

        // Create a custom error and pass it to the next middleware

        return next(new CustomError(`Oh no! As a ${roleFromUserObject}, you are not allowed to access this`, 403));
    }
    
    // If the user has the correct role, proceed to the next middleware

    next();
};

export default roleMiddleware;