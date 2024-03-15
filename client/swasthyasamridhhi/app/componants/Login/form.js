'use client'
import React, { useState } from 'react';
import LoginForm from './Loginfrom';

const FormComponent = () => {
  const [userType, setUserType] = useState('admin'); // Default to admin

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  return (
<div className="bg-gray-100 flex justify-center items-center">

<div className="w-1/5 h-screen hidden lg:block bg-black ">
  <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" class="object-cover bg-black w-full h-full"></img>
</div>

<div className=" lg:w-1/2 ">
<h2></h2>
<div className=' justify-center text-center gap-2 flex'>
<button onClick={() => handleUserTypeChange('admin')} className='w-16 text-white gap-5 bg-black p-5'>Admin</button>
      <button onClick={() => handleUserTypeChange('patient')} className='w-16 text-white gap-5 bg-black p-5'>Patient</button>
      <button onClick={() => handleUserTypeChange('doctor')} className='w-16 text-white gap-5 bg-black p-5'>Doctor</button>
</div>
      
 
      {userType === 'admin' && <AdminForm />}
      {userType === 'patient' && <PatientForm />}
      {userType === 'doctor' && <DoctorForm />}
</div>
</div>
   
  );
};

const AdminForm = () => {
  // Render admin-specific form fields here
  return <div><LoginForm type="Admin" /></div>;
};

const PatientForm = () => {
  // Render patient-specific form fields here
  return <div><LoginForm type="Patient" /></div>;
};

const DoctorForm = () => {
  // Render doctor-specific form fields here
  return <div><LoginForm type="Doctor" /></div>;
};

export default FormComponent;



