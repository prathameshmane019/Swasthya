import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  doctorID: {
    type: String,
    required : true
  },
  name: {
    firstName: String,
    middleName: String,
    surName: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialization: [String],
  org: String,
  orgAddress: {
    building: String,
    city: String,
    taluka: String,
    district: String,
    state: String,
    pincode: Number
  },
  dob: Date,
  mobile: [String],
  adharCard: Number,
  bloodGroup: String,
  education: [String],
  address: {
    building: String,
    city: String,
    taluka: String,
    district: String,
    state: String,
    pincode: Number
  },
  licenseNumber: String,
  emergencyno: String,
  orgNumber: String
}, { timestamps: true });

const Doctor = mongoose.models.Doctor || model('Doctor', doctorSchema);

export default Doctor;
