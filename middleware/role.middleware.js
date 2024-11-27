import CustomError from "../utils/CustomError.js";

const roleMiddleware = (roles) => (req, _, next) => {

    const roleFromUserObject = req.user.role.toLowerCase();
  

    const lowerCaseRoles = roles.map(role => role.toLowerCase());
    

    // Check if the user's role matches the required role
    if (!lowerCaseRoles.includes(roleFromUserObject)) {
     
        return next(new CustomError(`Oh no! As a ${roleFromUserObject}, you are not allowed to access this`, 403));
    }
    
    // If the user has the correct role, proceed to the next middleware

    next();
};

export default roleMiddleware;