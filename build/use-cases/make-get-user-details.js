function makeGetUserDetails({ findUserDetails }) {
    return async function () {
      return await findUserDetails();
    };
  }
  
  module.exports = makeGetUserDetails;
  