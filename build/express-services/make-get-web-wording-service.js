function makegetWebWordingService({ getWebWording } = {}) {
  return async function (req, res) {

    try {
      const staticInfo = await getWebWording();

      res.set("Content-Type", "application/json");
      res.status(200).send(staticInfo);
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      res.set("Content-Type", "application/json");
      res.status(400).send({ error: e.message });
    }
  };
}

module.exports = makegetWebWordingService;
