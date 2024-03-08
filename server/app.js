const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const Patient = require('./models/patient');
const app = express();
const port = process.env.PORT || 5000;

// CORS middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Define routes
app.post("/api", (req, res) => {
  const data = req.body; // Ensure to declare data variable
  console.log(data);
  res.send(`Server is listening on port ${port}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


mongoose.connect('mongodb+srv://maneprathamesh019:maneprathamesh019@cluster0.6tn2owo.mongodb.net/SwasthyaSamridhhi?retryWrites=true&w=majority&appName=AtlasApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Create a new patient document
const newPatient = new Patient({
  healthID: '13436',
  name: {
    firstName: 'Joeferefhn',
    middleName: 'Derfoe',
    surName: 'Smitrh'
  },
  dob: new Date('1990-01-01'),
  mobile: '12345637890',
  email: 'john@exa3mple.com',
  adharCard: 145333329012,
  bloodGroup: 'A+',
  address: {
    building: '123 Main St',
    city: 'City',
    taluka: 'Taluka',
    district: 'District',
    state: 'State',
    pincode: 123356
  },
  password: 'passwo3rd123',
  diseases: [
    { disease: 'Fever', yrs: 2 }
  ],
  contactPerson: {
    name: {
      firstName: 'Jane',
      surName: 'Doe'
    },
    mobile: '98765433210',
    email: 'jane@example.com',
    relation: 'Spouse',
    address: {
      building: '456 Elm St',
      city: 'City',
      taluka: 'Taluka',
      district: 'District',
      state: 'State',
      pincode: 654321
    }
  }
});

// Save the new patient document to the database
newPatient.save()
  .then(patient => {
    console.log('Patient created:', patient);
  })
  .catch(error => {
    console.error('Error creating patient:', error);
  });