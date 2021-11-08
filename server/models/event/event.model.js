const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const customQuestionsSchema = new Schema({
//     questionText: {
//       type: String,
//       required: true,
//     },
//     answerType: {
//       type: String,
//       required: true,
//     },
// });

// const formConfigSchema = new Schema({
//     participantInfo: {
//       type: Boolean,
//       required: true,
//     },
//     venue: {
//       type: Boolean,
//       required: true,
//     },
//     presentingMaterials: {
//       type: Boolean,
//       required: true,
//     },
//     content: {
//       type: Boolean,
//       required: true,
//     },
//     food: {
//       type: Boolean,
//       required: true,
//     },
//     drink: {
//       type: Boolean,
//       required: true,
//     },
//     customQuestions: [{
//       type: customQuestionsSchema,
//     }],
//     participantComment: {
//       type: Boolean,
//       required: true,
//     },
// });

const formConfigSchema = new Schema({
  venue: {
    type: String,
    required: true,
  },
});

const FormConfig = mongoose.model('FormConfig', formConfigSchema);

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
module.exports = {
  Event,
  FormConfig
};