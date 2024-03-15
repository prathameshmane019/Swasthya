const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const doctorSchema = new mongoose.Schema({
  doctorID: {
    type: String,
    unique: true, 
    required: true
},
  name: {
    firstName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
    middleName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
    surName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already Exist"],
    validate: [isEmail, "Please Enter a valid Email"],
  },
  specialization: [
    {
      special: {
        type: String,
      },
    },
  ],
  dob: {
    type: Date,
    required: [true, "Please enter Date of Birth"],
  },
  mobile: {
    type: [String],
    required: [true, "Please enter at least one Mobile Number"],
    validate: {
        validator: function(v) {
            return v.every(num => num.length >= 10); // Validates each mobile number in the array
        },
        message: "Please enter valid Mobile Number(s)",
    }
},
org: {
  type: String,
  required: [true, "Please enter Hospital of clinic name."],
},
orgAddress: {
  building: {
    type: String,
    required: [true, "Please enter complete Address of contact person"],
  },
  city: {
    type: String,
    required: [true, "Please enter complete Address of contact person"],
  },
  taluka: {
    type: String,
    required: [true, "Please enter complete Address of contact person"],
  },
  district: {
    type: String,
    required: [true, "Please enter complete Address of contact person"],
  },
  state: {
    type: String,
    required: [true, "Please enter complete Address of contact person"],
  },
  pincode: {
    type: Number,
    required: [true, "Please Enter complete Address of contact person"],
  },
},
  adharCard: {
    type: Number,
    unique: [true, "This AdharCard is already Registerd on System."],
    required: [true, "Pleasee enter AdharCard Number"],
    minlength: [12, "Please enter an valid AdharCard Number"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Please enter Blood Group"],
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
      required: [true, "Please enter complete Address of contact person"],
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
    taluka: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
    district: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
    state: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
    pincode: {
      type: Number,
      required: [true, "Please Enter complete Address of contact person"],
    },
  },
  licenseNumber: {
    type: String,
    required: [true, "Please enter License Number"],
},

  
  emergencyno: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  orgNumber: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  timestamps: true
});

doctorSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
