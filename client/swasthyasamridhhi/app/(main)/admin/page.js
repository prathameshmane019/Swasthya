import React from 'react'

function page() {
 


<<<<<<< HEAD
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient-register', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };
  
=======

>>>>>>> parent of 4db298d (1.0.1)
  return (
    <div>
      this is admin page
    </div>
  )
}

export default page
