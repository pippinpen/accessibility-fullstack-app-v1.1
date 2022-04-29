const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const logger = require('./logger');

const {
  NODE_ENV='development'
} = process.env;

module.exports = function (app) {
  if ( NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/", "build")));
    app.use(compression());
  }
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Content Secruit Policy error fix https://community.auth0.com/t/helmet-content-security-policy-error-for-react-express-app-on-azure/50674/2
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], 
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
        imgSrc: ["'self'", 'https://s.gravatar.com', 'https://i1.wp.com/cdn.auth0.com/'],
        connectSrc: ["'self'", 'dev-kabxz7i1.us.auth0.com/oauth/token'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'", "dev-kabxz7i1.us.auth0.com"],
      },
    }
  }));
  app.use(cors());

  // http logging
  // app.use(morgan("dev"));

//   let logger = new (winston.Logger)({
//     exitOnError: false,
//     level: 'info',
//     transports: [
//         new (winston.transports.Console)(),
//         new (winston.transports.File)({ filename: 'app.log'})
//     ]
// })

const myStream = {
    write: (text) => {
        logger.info(text)
    }
}
app.use(morgan('combined', { stream: myStream }));
};
