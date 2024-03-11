const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MotorLog = require('./models/motorLog'); // Assume you have defined the MotorLog model
const AirpumpLog = require('./models/airpumpLog'); // Assume you have defined the AirpumpLog model

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Express route to get latest motorState
app.get('/api/motorState', async (req, res) => {
    try {
        const latestMotorLog = await MotorLog.findOne().sort({ timestamp: -1 });
        res.json({ motorState: latestMotorLog.state });
    } catch (error) {
        console.error('Error fetching latest motorState:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Express route to get latest airpumpState
app.get('/api/airpumpState', async (req, res) => {
    try {
        const latestAirpumpLog = await AirpumpLog.findOne().sort({ timestamp: -1 });
        res.json({ airpumpState: latestAirpumpLog.state });
    } catch (error) {
        console.error('Error fetching latest airpumpState:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

