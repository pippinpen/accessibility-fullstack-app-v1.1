const FormConfig = require('../models/formConfig/formConfig.model');
// const { errorHandler } = require('./utils');
// const logger = require('../logger');

exports.getForm = function (req, res) {
  // let query = {
  //   "_id": req,
  // };
  // if (req.params.id) {
  //   query._id = req.params.id;
  // }
  FormConfig.findbyId(id)
    .exec((err, formData) => {
      // if (err) return errorHandler(res, err);
      if (err) return console.log(res, err);
      if (req.params.id && formData.length === 0)
        return res.status(404).send({ message: 'No form with that ID' });
      return res.status(200).json(formData);
    });
};
