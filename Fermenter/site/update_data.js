import { getLatestState } from './server.js';

let motorState = 0;
let airpumpState = 0;

window.onload = async function() {
    const { initialMotorState, initialAirpumpState } = await getLatestState();
    motorState = initialMotorState;
    airpumpState = initialAirpumpState;
    initFuncJs();
}

export { motorState, airpumpState };