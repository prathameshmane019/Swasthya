'use client'
import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    disease: '',
    medication: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(formData);
      const response = await axios.post('http://localhost:3000/api/record/new',formData);
      console.log('Form submitted:', formData);
      console.log('API Response:', response);
      // Reset form fields after successful submission
      setFormData({
        name: '',
        date: '',
        time: '',
        disease: '',
        medication: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendFormData = async (data) => {
    // Placeholder function for sending form data to API
    // Replace this with your actual API endpoint and data sending logic
    // For demonstration purposes, we'll just log the data here
    console.log('Sending form data:', data);
    // Simulating a response delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Data sent successfully' };
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Patient Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="disease" className="block text-gray-700">Disease:</label>
        <input
          type="text"
          id="disease"
          name="disease"
          value={formData.disease}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="medication" className="block text-gray-700">Medication:</label>
        <input
          type="text"
          id="medication"
          name="medication"
          value={formData.medication}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="notes" className="block text-gray-700">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button type="submit" className="bg-black text-white p-2 rounded-md hover:bg-blue-600">Prescribe</button>
    </form>
  );
};

export default PrescriptionForm;
