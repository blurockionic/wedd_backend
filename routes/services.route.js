import express from 'express';

import jwtAuthentication from "../middleware/auth.middleware.js"
import createService from '../controllers/serviceController/create.service.controller.js';
import updateService from '../controllers/serviceController/update.service.controller.js';
import roleMiddleware from '../middleware/role.middleware.js';
import deleteService from '../controllers/serviceController/delete.service.controller.js';
import getAllServices from '../controllers/serviceController/getAll.service.controller.js';
import getServiceById from '../controllers/serviceController/getServiceById.service.controller.js';
import getAllServicesByVendorId from '../controllers/serviceController/getServiceByvendorId.controller.js';
import bulkInsertServices from '../controllers/serviceController/bulkInstertionOrupdation.controller.js';



const serviceRouter = express.Router();

serviceRouter.route("/").get(getAllServices)
serviceRouter.route("/:id").get(getServiceById);
serviceRouter.route("/service_by_VendorId/:id").get(getAllServicesByVendorId)

serviceRouter.use([jwtAuthentication, roleMiddleware(["vendor", "admin"])]);
serviceRouter.route('/create').post(createService);
serviceRouter.route("/update/:id").patch( updateService);
serviceRouter.route("/delete/:id").delete(deleteService);
serviceRouter.route("/bulk").post(bulkInsertServices)





export default serviceRouter;