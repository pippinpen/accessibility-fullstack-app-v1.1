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
      extraPlace: {
        type: Boolean,
        required: false,
      },
      bslInterpreter: {
        type: Boolean,
        required: false,
      },
      dbInterpreter: {
        type: Boolean,
        required: false,
      },
      captions: {
        type: Boolean,
        required: false,
      },
      audioDescription: {
        type: Boolean,
        required: false,
      },
      regularBreaks: {
        type: Boolean,
        required: false,
      },
      technologyHelp: {
        type: Boolean,
        required: false,
      },
      technologyMissing: {
        type: Boolean,
        required: false,
      },
      wifiHelp: {
        type: Boolean,
        required: false,
      },
      multiCommunication: {
        type: Boolean,
        required: false,
      },
      stepFree: {
        type: Boolean,
        required: false,
      },
      wideRoutes: {
        type: Boolean,
        required: false,
      },
      seatingSpecialist: {
        type: Boolean,
        required: false,
      },
      seatingSpace: {
        type: Boolean,
        required: false,
      },
      seatingPower: {
        type: Boolean,
        required: false,
      },
      quietArea: {
        type: Boolean,
        required: false,
      },
      hearingSystem: {
        type: Boolean,
        required: false,
      },
      assistanceDog: {
        type: Boolean,
        required: false,
      },
      formatBefore: {
        type: Boolean,
        required: false,
      },
      dyslexicFont: {
        type: Boolean,
        required: false,
      },
      largeFont: {
        type: Boolean,
        required: false,
      },
      contrast: {
        type: Boolean,
        required: false,
      },
      digital: {
        type: Boolean,
        required: false,
      },
      paper: {
        type: Boolean,
        required: false,
      },
      braille: {
        type: Boolean,
        required: false,
      },
      tactileLabels: {
        type: Boolean,
        required: false,
      },
      vegetarian: {
        type: Boolean,
        required: false,
      },
      vegan: {
        type: Boolean,
        required: false,
      },
      kosher: {
        type: Boolean,
        required: false,
      },
      halal: {
        type: Boolean,
        required: false,
      },
      dairyFree: {
        type: Boolean,
        required: false,
      },
      glutenFree: {
        type: Boolean,
        required: false,
      },
      wheatAllergy: {
        type: Boolean,
        required: false,
      },
      nutAllergy: {
        type: Boolean,
        required: false,
      },
      fishAllergy: {
        type: Boolean,
        required: false,
      },
      eggAllergy: {
        type: Boolean,
        required: false,
      },
      soyAllergy: {
        type: Boolean,
        required: false,
      },
      otherAllergy: {
        type: String,
        required: false,
      },
      nonAlcoholic: {
        type: Boolean,
        required: false,
      },
    }]
},
{timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;