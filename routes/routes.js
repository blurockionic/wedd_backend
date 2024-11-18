import express from 'express';
const routes = express.Router();



import UserRouter from './user.route.js';


routes.use("/users", UserRouter);


export default routes