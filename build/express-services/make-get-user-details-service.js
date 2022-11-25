function makeGetUserDetailsService({ getUserDetails }) {
    return async function (req, res) {
        try {
            const user = await getUserDetails();

            res.set('Content-Type', 'application/json');
            res.status(200).send(user);
        } catch (e) {
            // TODO: Error logging
            console.log(e);
            res.set("Content-Type", "application/json");
            res.status(400).send({ error: e.message });
        }        
    }
}

module.exports = makeGetUserDetailsService;