'use client'
import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from "../../componants/Admin/DefaultLayout"
import Compoanants from "../../componants/Admin/admincomponent"

export default function ExampleComponent () {
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
}

function page() {
  return (
    <div className=' bg-purple-300'>
      <DefaultLayout className=' bg-purple-300'>
          <Compoanants></Compoanants>
      </DefaultLayout>
    </div>
  )
}

