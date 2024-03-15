'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    patientID: '',
    name: { firstName: '', middleName: '', surName: '' },
    email: '',
    dob: '',
    gender: '',
    mobile: [],
    adharCard: '',
    bloodGroup: '',
    address: {
      building: '',
      city: '',
      taluka: '',
      district: '',
      state: '',
      pincode: '',
    },
    allergies: [],
    medication: {
      name: '',
      dosage: '',
      frequency: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');
    if (nameParts.length > 1) {
      const parent = nameParts[0];
      const child = nameParts[1];
      setFormData(prevState => ({
        ...prevState,
        [parent]: {
          ...(prevState[parent] || {}),
          [child]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await axios.post('http://localhost:3000/api/patient/register', formData);
      console.log(result);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl text-center font-semibold mb-8">Patient Registration</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Patient ID */}
        <div className="mb-4">
          <label htmlFor="patientID" className="block font-semibold mb-1">Patient ID</label>
          <input
            type="text"
            id="patientID"
            name="patientID"
            value={formData.patientID}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
{/* Name */}
<div className="mb-4">
  <label htmlFor="firstName" className="block font-semibold mb-1">First Name</label>
  <input
    type="text"
    id="firstName"
    name="name.firstName"
    value={formData.name.firstName}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>

<div className="mb-4">
  <label htmlFor="middleName" className="block font-semibold mb-1">Middle Name</label>
  <input
    type="text"
    id="middleName"
    name="name.middleName"
    value={formData.name.middleName}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>

<div className="mb-4">
  <label htmlFor="surName" className="block font-semibold mb-1">Sur Name</label>
  <input
    type="text"
    id="surName"
    name="name.surName"
    value={formData.name.surName}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>

        {/* Repeat for middleName and surName */}

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block font-semibold mb-1">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block font-semibold mb-1">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Adhar Card */}
        <div className="mb-4">
          <label htmlFor="adharCard" className="block font-semibold mb-1">Adhar Card</label>
          <input
            type="number"
            id="adharCard"
            name="adharCard"
            value={formData.adharCard}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block font-semibold mb-1">Blood Group</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

     {/* Address */}
<div className="mb-4">
  <label className="block font-semibold mb-1">Address</label>
  <input
    type="text"
    name="address.building"
    placeholder="Building"
    value={formData.address.building}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
<div className="mb-4">
  <input
    type="text"
    name="address.city"
    placeholder="City"
    value={formData.address.city}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
<div className="mb-4">
  <input
    type="text"
    name="address.taluka"
    placeholder="Taluka"
    value={formData.address.taluka}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
<div className="mb-4">
  <input
    type="text"
    name="address.district"
    placeholder="District"
    value={formData.address.district}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
<div className="mb-4">
  <input
    type="text"
    name="address.state"
    placeholder="State"
    value={formData.address.state}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
<div className="mb-4">
  <input
    type="text"
    name="address.pincode"
    placeholder="Pincode"
    value={formData.address.pincode}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>


        {/* Allergies */}
        <div className="mb-4">
          <label htmlFor="allergies" className="block font-semibold mb-1">Allergies (comma-separated)</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Medication Name */}
        <div className="mb-4">
          <label htmlFor="medicationName" className="block font-semibold mb-1">Medication Name</label>
          <input
            type="text"
            id="medicationName"
            name="medication.name"
            value={formData.medication.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Medication Dosage */}
        <div className="mb-4">
          <label htmlFor="medicationDosage" className="block font-semibold mb-1">Medication Dosage</label>
          <input
            type="text"
            id="medicationDosage"
            name="medication.dosage"
            value={formData.medication.dosage}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Medication Frequency */}
        <div className="mb-4">
          <label htmlFor="medicationFrequency" className="block font-semibold mb-1">Medication Frequency</label>
          <input
            type="text"
            id="medicationFrequency"
            name="medication.frequency"
            value={formData.medication.frequency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >Register</button>
      </form>
    </div>
  );
}
