function makeFindUserDetails({ makeDb }) {
    return async function() {
        const db = await makeDb();
        
        let collection = 'web-wording';

        const result = await db.collection(collection).find();
        const userDetailsDb = (await result.toArray())

        return userDetailsDb;
    }
}

module.exports = makeFindUserDetails;