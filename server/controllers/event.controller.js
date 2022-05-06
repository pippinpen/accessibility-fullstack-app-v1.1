const Event = require('../models/event/event.model');
const { errorHandler } = require('./../utils/loggerUtil');
const logger = require('./../logger');
const { createMongooseUpdatePath } = require("./../utils/mongoosePathUtil");

exports.getEvents = function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  Event.find(query)
    // .populate('items')
    .exec((err, events) => {
      // if (err) return errorHandler(res, err);
      if (err) return console.log(res, err);
      if (req.params.id && events.length === 0)
        return res.status(404).send({ message: 'No event with that ID' });
      return res.status(200).json(events);
    });
};

exports.getOwnEvent = function (req, res) {
  let query = {
    customerID: req.user.sub,
  };
  if (req.params.id) {
    query._id = req.params.id;
  }
  Event.find(query)
    .exec((err, eventData) => {
      // if (err) return errorHandler(res, err);
      if (err) return console.log(res, err);
      if (req.params.id && eventData.length === 0)
        return res.status(404).send({ message: 'No event with that ID' });
      return res.status(200).json(eventData);
    });
};

exports.addEvent = function (req, res) {
  const eventData = req.body;
  logger.info(`eventData ${eventData}`);
  const newEvent = new Event({ eventData });
  newEvent.save((err, event) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(event);
  });
};

exports.addOwnEvent = function (req, res) {
  const eventData = { customerID: req.user.sub, formConfig: {...req.body}};
  console.log(`eventData ${JSON.stringify(eventData)}`);
  logger.info(`eventData ${eventData}`);
  const newEvent = new Event(eventData);
  newEvent.save((err, event) => {
    console.log("newEvent", newEvent);
    if (err) return errorHandler(res, err);
    return res.status(201).json(event);
    });
  };

exports.updateEvent = function (req, res) {
  Event.updateOne({ _id: req.params.id }, req.body, function (err, result) {
    if (err) return errorHandler(res, err);
    logger.info(`result ${result}`);
    if (result.nModified === 0)
      return res.status(404).send({ message: 'No event with that ID' });
    res.sendStatus(200);
  });
};

exports.updateOwnEvent = function (req, res) {
  const updates = createMongooseUpdatePath(req.body);
  Event.updateOne(
    { _id: req.params.id, owner: req.user.sub },
    { $set: updates },
    function (err, result) {
      if (err) return errorHandler(res, err);
      logger.info(`result ${result}`);
      if (result.nModified === 0)
        return res.status(404).send({ message: 'No event with that ID' });
      res.sendStatus(200);
    });
};

exports.removeEvent = function (req, res) {
  const eventId = req.params.id;
  Event.deleteOne({ _id: eventId }, function (err, report) {
    if (err) return errorHandler(res, err);
    logger.info(`report ${report}`);
    if (eventId && report.deletedCount === 0) {
      return res.status(404).send({ message: 'No event with that ID' });
    }
    res.sendStatus(204);
  });
};

exports.removeOwnEvent = function (req, res) {
  const eventId = req.params.id;
  Event.deleteOne(
    { _id: eventId, owner: req.user.sub },
    function (err, report) {
      if (err) return errorHandler(res, err);
      logger.info(`report ${report}`);
      if (eventId && report.deletedCount === 0) {
        return res.status(404).send({ message: 'No event with that ID' });
      }
      res.sendStatus(204);
    },
  );
};

// For attendee actions

exports.getOneEvent = function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  logger.info(`get one Event ATTEMPT, query`, query)
  Event.find(query)
  .exec((err, event) => {
    if (err) return console.log(res, err);
    if (req.params.id && event.length === 0)
      return res.status(404).send({ message: 'No event with that ID' });
    return res.status(200).json(event);
  });
};


exports.eventResponse = function (req, res) {
  logger.info(`Update Event response ATTEMPT`, req.body)
  Event.updateOne(
    { _id: req.params.id },
    { $push: { responses: req.body }},
    function (err, result) {
      if (err) return errorHandler(res, err);
      logger.info(`result ${result}`);
      if (result.nModified === 0)
        return res.status(404).send({ message: 'No event with that ID' });
      res.sendStatus(200);
    });
};