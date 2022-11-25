function makeGetWebWording({ findWebWording }) {
  return async function () {
    return await findWebWording();
  };
}

module.exports = makeGetWebWording;
