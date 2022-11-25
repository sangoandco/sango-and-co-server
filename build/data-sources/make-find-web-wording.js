function makeGetWebWordingService({ }) {
  return async function () {

    let staticInfoDb = {};
      staticInfoDb = {
        header: 'Sango & Co.',
        body: 'Welcome...'
      };
    return staticInfoDb;
  };
}

module.exports = makeGetWebWordingService;
