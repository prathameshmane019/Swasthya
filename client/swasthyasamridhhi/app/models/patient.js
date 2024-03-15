const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail, isMobilePhone } = require("validator");
const prescriptionSchema = require("./prescription");
const res = require("express/lib/response");

const patientSchema = new mongoose.Schema({

  patientID: {
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
    validate: [isEmail, "Please Enter a valid Email"],
  },
  dob: {
    type: Date,
    required: [true, "Please enter Date of Birth"],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, "Please specify gender"],
},

mobile: {
  type: [String],
  required: [true, "Please enter at least one Mobile Number"],
  validate: {
      validator: function(v) {
          return v.every(num => num.length >= 10); 
      },
      message: "Please enter valid Mobile Number(s)",
  }
},

  
  
  adharCard: {
    type: Number,
    min: [100000000000, "Please enter an valid AdharCard Number"],
    max: [999999999999, "Please enter an valid AdharCard Number"],
    unique: [true, "This AdharCard is already Registerd on System."],
    required: [true, "Please enter AdharCard Number"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Please enter Blood Group"],
  },
  address: {
    building: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    taluka: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    district: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    state: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    pincode: {
      type: Number,
      min: [100000, "Please enter a valid pincode"],
      max: [999999, "Please enter a valid pincode"],
      required: [true, "Please enter complete Address"],
    },
  },

  allergies: {
    type: [String],
    default: [],
},
medication: {
  type: {
      name: {
          type: String,
          required: [true, "Please enter medication name"],
      },
      dosage: {
          type: String,
         
      },
      frequency: {
          type: String,
          
      },
     
  },
  
},

  diseases: [
    {
      disease: {
        type: String,
      },
      yrs: {
        type: Number,
      },
    },
  ],

    
   timestamps: true


});

patientSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
