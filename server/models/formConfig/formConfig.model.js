const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formConfigSchema = new Schema({
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
});

const FormConfig = mongoose.model('FormConfig', formConfigSchema);

module.exports = FormConfig;

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
