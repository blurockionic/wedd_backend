import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";
const jwtAuthentication =(req,_,next)=>{

    // extract the token from the cookie or authorization header for mobile
    
        const token = req.cookies.accessToken 
        ||req.headers['authorization'] 
        && req.headers['authorization'].startsWith('Bearer ') 
        && req.headers['authorization'].split(' ')[1];

    
    // validate the token if it is found in the cookie

        if (!token) {
            return next(new CustomError('Not authenticated', 401));
        }

    // validate the token from jwt verification and passing the user  through req object by collecting from model

    try {

        //  decode the token 

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // const user = await User.findById(decodedToken.id);

        // TODO: find user from model and set to req
         

        req.user = user;

        next();
        
    } catch (error) {

        next(new CustomError('Token is invalid or expired', 403));
        
    }

        

}

export default jwtAuthentication;