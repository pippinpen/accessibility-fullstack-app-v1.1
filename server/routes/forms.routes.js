const path = require("path");
const express = require("express");
const router = express.Router();

const {
  getForm,
} = require("../controllers/form.controller.js");


router
  .get("/:id?", getForm)
module.exports = router;
