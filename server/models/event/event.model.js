const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    customerID: {
      type: String,
      required: true,
    },
    formConfig: {
      title: {
      type: String,
      required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      isOnline: {
        type: Boolean,
        required: true,
      },
      isInPerson: {
        type: Boolean,
        required: true,
      },
      hasMaterials: {
        type: Boolean,
        required: true,
      },
      hasFood: {
        type: Boolean,
        required: true,
      },
      hasDrink: {
        type: Boolean,
        required: true,
      },
    },
    responses: [{
      venue: {
        type: String,
        required: false,
      },
    }]
},
{timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;