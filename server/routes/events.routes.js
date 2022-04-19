const path = require("path");
const express = require("express");
const logger = require("../logger");
const router = express.Router();

const {
  // getEvents,
  // addEvent,
  // updateEvent,
  // removeEvent,
  getOwnEvent,
  addOwnEvent,
  updateOwnEvent,
  removeOwnEvent
} = require("../controllers/event.controller.js");

// const { checkPermissions } = require("../middleware/permissions.middleware");
const { checkJwt } = require("../middleware/authz.middleware");

// const {
//   CreateEvents,
//   DeleteEvents,
//   ReadEvents,
//   UpdateEvents,
//   CreateOwnEvent,
//   DeleteOwnEvent,
//   ReadOwnEvent,
//   UpdateOwnEvent,
// } = require("../constants").EventPermission;

const logToken = (req, res, next) => {
  logger.info(`headers: ${req.headers}`);
  next();
};

router
  .get("/:id?", logToken, checkJwt, getOwnEvent)
  .post("/", logToken, checkJwt, addOwnEvent)
  .put("/:id", checkJwt, updateOwnEvent)
  .delete("/:id", checkJwt, removeOwnEvent);
  // Admin
  // .get("/:id?", logToken, checkJwt, getEvents)
  // .post("/", logToken, checkJwt, addEvent)
  // .put("/:id", checkJwt, updateEvent)
  // .delete("/:id", checkJwt, removeEvent);

module.exports = router;

// normal user permissions
// checkPermissions(ReadOwnEvent)
// checkPermissions(CreateOwnEvent)
// checkPermissions(UpdateOwnEvent)
// checkPermissions(DeleteOwnEvent)

// admin permissions
// checkPermissions(ReadEvents)
// checkPermissions(CreateEvents)
// checkPermissions(UpdateEvents)
// checkPermissions(DeleteEvents)