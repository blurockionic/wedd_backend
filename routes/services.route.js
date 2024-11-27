import express from 'express';

import jwtAuthentication from "../middleware/auth.middleware.js"
import createService from '../controllers/serviceController/create.service.controller.js';
import updateService from '../controllers/serviceController/update.service.controller.js';
import roleMiddleware from '../middleware/role.middleware.js';
import deleteService from '../controllers/serviceController/delete.service.controller.js';
import getAllServices from '../controllers/serviceController/getAll.service.controller.js';



const serviceRouter = express.Router();

serviceRouter.use([jwtAuthentication, roleMiddleware(["vendor", "admin"])]);
serviceRouter.route('/create').post(createService);
serviceRouter.route("/update/:id").patch( updateService);

serviceRouter.route("/").get(getAllServices)
serviceRouter.route("/delete/:id").delete(deleteService);





export default serviceRouter;