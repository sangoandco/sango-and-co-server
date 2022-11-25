const {
  getWebWording,
  getUserDetails,
} = require("../use-cases");

const makeGetWebWordingService = require("./make-get-web-wording-service");
const makeGetUserDetailsService = require('./make-get-user-details-service')

const getWebWordingService = makeGetWebWordingService({ getWebWording });
const getUserDetailsService = makeGetUserDetailsService({ getUserDetails });

const services = {
  getWebWordingService,
  getUserDetailsService
};

module.exports = services;
