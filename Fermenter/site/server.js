const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'Fermenter';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const motorLog = db.collection('Motor_log');
    const airpumpLog = db.collection('Airpump_log');

    app.get('/api/motorState', (req, res) => {
        motorLog.findOne({}, { sort: { _id: -1 } }, (err, result) => {
            if (err) throw err;
            res.json({ motorState: result ? result.state : 0 });
        });
    });

    app.get('/api/airpumpState', (req, res) => {
        airpumpLog.findOne({}, { sort: { _id: -1 } }, (err, result) => {
            if (err) throw err;
            res.json({ airpumpState: result ? result.state : 0 });
        });
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});


