const makeGetWebWording = require("./make-get-web-wording");
const makeGetUserDetails = require('./make-get-user-details');

const {
  findWebWording,
  findUserDetails
} = require("../data-sources");

const getWebWording = makeGetWebWording({ findWebWording });
const getUserDetails = makeGetUserDetails({ findUserDetails });

const usecases = {
  getWebWording,
  getUserDetails
};

module.exports = usecases;
