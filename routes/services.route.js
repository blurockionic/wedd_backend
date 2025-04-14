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
import { makeLead } from '../controllers/serviceController/lead.service.controller.js';
import { deleteFaq, upsertFaq } from '../controllers/faq controller/faq.controller.js';
import feedback from '../controllers/serviceController/feedback.controller.js';
import serviceArchive from '../controllers/serviceController/archive.service.controller.js';
import getMostViewedServices from '../controllers/serviceController/getMostViewedServices.controller.js';
import getServiceLocations from '../controllers/serviceController/getAllLocation.controller.js';





const serviceRouter = express.Router();

serviceRouter.route("/").get(getAllServices)
serviceRouter.get("/get-location",getServiceLocations)
serviceRouter.route("/getMostViewedServices").get(getMostViewedServices)
serviceRouter.route("/:id").get(getServiceById);
serviceRouter.route("/service_by_VendorId/:id").get(getAllServicesByVendorId)
serviceRouter.route("/makeLead/:id").put(jwtAuthentication,roleMiddleware(["user"]),makeLead)
serviceRouter.route("/feedback/:id/").post(jwtAuthentication,roleMiddleware(["user"]),feedback)


serviceRouter.use([jwtAuthentication, roleMiddleware(["vendor", "admin"])]);
serviceRouter.route('/').post(createService);
serviceRouter.route("/:id").put( updateService);
serviceRouter.route("/:id").delete(deleteService);
serviceRouter.route("/bulk").post(bulkInsertServices)
serviceRouter.route("/serviceArchive/:id").put(serviceArchive)
// add faq
serviceRouter.post("/:serviceId/faq/:faqId?", upsertFaq);
serviceRouter.delete("/:serviceId/faq/:faqId", deleteFaq);






export default serviceRouter;
