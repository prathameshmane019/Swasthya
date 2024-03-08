'use client'
import React, { useState } from 'react';
import axios from 'axios';

function ExampleComponent() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient-register', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <h1>Example Component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExampleComponent;
