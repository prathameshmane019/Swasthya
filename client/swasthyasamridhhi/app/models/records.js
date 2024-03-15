const mongoose = require("mongoose");


const healthRecordSchema = new mongoose.Schema({
    patientID: {
        type: String,
        required: [true, "Please provide Patient Blockchain ID"]
    },
    doctorID: {
        type: String,
        required: [true, "Please provide Doctor Blockchain ID"]
    },
    visitDate: {
        type: Date,
        required: [true, "Please provide Visit Date"]
    },
    diagnosis: {
        type: String,
        required: [true, "Please provide Diagnosis"]
    },
    prescription: {
        type: String,
        required: [true, "Please provide Prescription"]
    },
    status: {
        type: String,
        required: [true, "Please provide Status"]
    },
    notes: {
        type: String,
        required: [true, "Please provide Status"]
    },
    
    
        timestamps: true
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);

module.exports = HealthRecord;
