const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    customerID: {
      type: String,
      required: true,
    },
    formConfig: {
      type: mongoose.ObjectId,
      ref: 'FormConfig',
    },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;