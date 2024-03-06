const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Fermenter';

async function getLatestState() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();

        const db = client.db(dbName);
        const motorCollection = db.collection('Motor_log');
        const airpumpCollection = db.collection('Airpump_log');

        const latestMotorState = await motorCollection.findOne({}, { sort: { timestamp: -1 } });
        const latestAirpumpState = await airpumpCollection.findOne({}, { sort: { timestamp: -1 } });

        const initialMotorState = latestMotorState ? parseInt(latestMotorState.motorState) : 0;
        const initialAirpumpState = latestAirpumpState ? parseInt(latestAirpumpState.airpumpState) : 0;

        console.log("Initial motorState:", initialMotorState);
        console.log("Initial airpumpState:", initialAirpumpState);

        return { initialMotorState, initialAirpumpState };

    } catch (error) {
        console.error("Error in MongoDB data request", error);
    } finally {
        await client.close();
    }
}

module.exports = { getLatestState };


