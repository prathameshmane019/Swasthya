import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const patientSchema = new Schema({
  patientID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    firstName: {
      type: String,
      required: true
    },
    middleName: String,
    surName: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  adharCard: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  address: {
    building: String,
    city: String,
    taluka: String,
    district: String,
    state: String,
    pincode: String
  },
  allergies: String,
  medication: {
    name: String,
    dosage: String,
    frequency: String
  }
}, { timestamps: true });

const Patient = mongoose.models.Patient || model('Patient', patientSchema);

export default Patient;
