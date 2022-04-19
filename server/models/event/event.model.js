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
      venue: {
        type: String,
        required: true,
      },
      materials: {
        type: String,
        required: true,
      },
      foodDrink: {
        type: String,
        required: true,
      },
    },
    responses: {
      type: [String],
      default: [],
    }
},
{timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;