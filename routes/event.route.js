import express from "express";
import jwtAuthentication from "../middleware/auth.middleware.js"
import createEvent  from "../controllers/eventController/create.event.controller.js"
import getAllEvent from "../controllers/eventController/get.event.controller.js";
import createTaskOnEvent from "../controllers/eventController/create.task.event.controller.js"
import createTaskOnSubEvent from "../controllers/eventController/create.task.subevent.event.controller.js"
import createSubEvent from "../controllers/eventController/create.subevent.event.controller.js"
import addVendors from "../controllers/eventController/create.vendors.event.controller.js"
import addVendorsOnSubEvent from "../controllers/eventController/create.vendors.subevent.event.controller.js"
import deleteEvent  from "../controllers/eventController/delete.event.controller.js"
import deleteSubEvent  from "../controllers/eventController/delete.subevent.event.controller.js"
import deleteSubEventTask  from "../controllers/eventController/delete.task.subevent.event.controller.js"
import deleteSubEventVendor from "../controllers/eventController/delete.vendor.subevent.event.controller.js"
import deleteEventTask from "../controllers/eventController/delete.task.event.controller.js"
import deleteEventVendor from "../controllers/eventController/delete.vendor.event.controller.js"
import getTasksForEvent from "../controllers/eventController/get.tasks.event.controller.js"
import updateTaskStatus from "../controllers/eventController/update.status.task.controller.js"
import updateTask from "../controllers/eventController/update.task.event.controller.js"
import updateEvent from "../controllers/eventController/update.event.controller.js";


const EventRouter =  express.Router();

//endpoint for create new event
EventRouter.route("/newevent").post(jwtAuthentication, createEvent);
EventRouter.route("/getevents").get(jwtAuthentication, getAllEvent);
EventRouter.route("/:id").put(jwtAuthentication, updateEvent);
// endpoint for event task 

EventRouter.route("/task/:id").post(jwtAuthentication, createTaskOnEvent);
// Get all tasks for an event
EventRouter.route("/tasks/:id").get(jwtAuthentication, getTasksForEvent);

// Update task status
EventRouter.route("/task/status/:taskId").patch(jwtAuthentication, updateTaskStatus);

// Update task
EventRouter.route("/task/:taskId").put(jwtAuthentication, updateTask);

EventRouter.route("/task/:id/:subEventId").post(jwtAuthentication, createTaskOnSubEvent);
//endpoint for adding vendor on sub event
EventRouter.route("/subevent/vendor/:id/:subEventId").post(jwtAuthentication, addVendorsOnSubEvent);

EventRouter.route("/:id/subevent").post(jwtAuthentication, createSubEvent);
EventRouter.route("/:id/vendors").post(jwtAuthentication, addVendors)
//endpoint for adding vendor on sub event
EventRouter.route("/:id/vendors/:subEventId").post(jwtAuthentication, addVendorsOnSubEvent);
//endpoint for deleting whole event 
EventRouter.route("/:id").delete(jwtAuthentication, deleteEvent)
//endpoint for delete event task
EventRouter.route("/task/:id/:eventTaskId").delete(jwtAuthentication, deleteEventTask)
//endpoint for delete event vendor
EventRouter.route("/vendor/:id/:eventVendorId").delete(jwtAuthentication, deleteEventVendor)
//endpoint for deleting subEvent
EventRouter.route("/:id/:subEventId").delete(jwtAuthentication, deleteSubEvent)
//endpoint for deleting sub-event task
EventRouter.route("/subevent/task/:id/:subEventId/:subEventTaskId").delete(jwtAuthentication, deleteSubEventTask)
//endpoint for deleting sub-event vendor
EventRouter.route("/subevent/vendor/:id/:subEventId/:subEventVendorId").delete(jwtAuthentication, deleteSubEventVendor)

export default EventRouter;