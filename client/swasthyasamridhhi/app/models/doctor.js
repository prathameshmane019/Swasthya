import mongoose from 'mongoose';
import { isEmail } from 'validator';

const { Schema, model } = mongoose;

const doctorSchema = new Schema({
  doctorID: {
    type: String,
    unique: true, 
    required: true
  },
  name: {
    firstName: {
      type: String,
      required: [true, "Please enter full Name"]
    },
    middleName: {
      type: String,
      required: [true, "Please enter full Name"]
    },
    surName: {
      type: String,
      required: [true, "Please enter full Name"]
    }
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already Exist"],
    validate: [isEmail, "Please Enter a valid Email"]
  },
  specialization: [
    {
      special: {
        type: String,
      },
    },
  ],
  org: {
    type: String,
    required: [true, "Please enter Hospital or clinic name."]
  },
  orgAddress: {
    building: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    taluka: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    district: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    state: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    pincode: {
      type: Number,
      required: [true, "Please enter complete Address of contact person"]
    }
  },
  dob: {
    type: Date,
    required: [true, "Please enter Date of Birth"]
  },
  mobile: {
    type: [String],
    required: [true, "Please enter at least one Mobile Number"],
    validate: {
      validator: function(v) {
        return v.every(num => num.length >= 10); // Validates each mobile number in the array
      },
      message: "Please enter valid Mobile Number(s)"
    }
  },
  adharCard: {
    type: Number,
    // unique: [true, "This AdharCard is already Registered on System."],
    // required: [true, "Please enter AdharCard Number"],
    // minlength: [12, "Please enter a valid AdharCard Number"]
    required: [true, " Please enter adharCard "]
  },
  bloodGroup: {
    type: String,
    required: [true, "Please enter Blood Group"]
  },
  education: [
    {
      degree: {
        type: String,
      },
    },
  ],
  address: {
    building: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    taluka: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    district: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    state: {
      type: String,
      required: [true, "Please enter complete Address of contact person"]
    },
    pincode: {
      type: Number,
      required: [true, "Please Enter complete Address of contact person"]
    }
  },
  licenseNumber: {
    type: String,
    required: [true, "Please enter License Number"]
  },
  emergencyno: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"]
  },
  orgNumber: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"]
  }
}, { timestamps: true });

const Doctor = mongoose.models.Doctor || model('Doctor', doctorSchema);

export default Doctor;
