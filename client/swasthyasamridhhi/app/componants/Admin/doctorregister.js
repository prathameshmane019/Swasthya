"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function Registration(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adharCard: '',
        specialization: [],
        org: '',
        education: '',
        licenseNumber: '',
        area: '',
        city: '',
        state: '',
        postCode: ''
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
      const result = await axios.post('http://localhost:3000/api/', formData);
      console.log(result);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         // Send formData to server using axios or fetch
    //         console.log(formData);
    //         // Reset form data after submission if needed
    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             phone: '',
    //             adharCard: '',
    //             specialization: [],
    //             org: '',
    //             education: '',
    //             licenseNumber: '',
    //             area: '',
    //             city: '',
    //             state: '',
    //             postCode: ''
    //         });
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <div className="flex items-center justify-center p-12 App">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <h1>Register as {props.type}</h1>
                <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    {/* First Name */}
                    <div className="mb-4">
  <label htmlFor="doctorID" className="block font-semibold mb-1">Doctor ID</label>
  <input
    type="text"
    id="doctorID"
    name="doctorID"
    value={formData.doctorID}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-md px-4 py-2"
  />
</div>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Last Name */}
                    <div className="mb-5">
                        <label htmlFor="lastName" className="mb-3 block text-base font-medium text-[#07074D]">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Phone */}
                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Aadhar Card */}
                    <div className="mb-4">
                        <label htmlFor="adharCard" className="block font-semibold mb-1">Aadhar Card</label>
                        <input
                            type="number"
                            id="adharCard"
                            name="adharCard"
                            value={formData.adharCard}
                            onChange={handleChange}
                            placeholder="Enter Aadhar Card"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Specialization */}
                    {/* (You may use the same logic as provided for adding/deleting inputs) */}
                    {/* Hospital Name */}
                    <div className="mb-5">
                        <label htmlFor="org" className="mb-3 block text-base font-medium text-[#07074D]">Hospital Name</label>
                        <input
                            type="text"
                            name="org"
                            id="org"
                            placeholder="Hospital Name"
                            value={formData.org}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Education */}
                    <div className="mb-5">
                        <label htmlFor="education" className="mb-3 block text-base font-medium text-[#07074D]">Education</label>
                        <input
                            type="text"
                            name="education"
                            id="education"
                            placeholder="Education / Degree"
                            value={formData.education}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* License Number */}
                    <div className="mb-5">
                        <label htmlFor="licenseNumber" className="mb-3 block text-base font-medium text-[#07074D]">License Number</label>
                        <input
                            type="text"
                            name="licenseNumber"
                            id="licenseNumber"
                            placeholder="License Number"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    {/* Address Details */}
                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">Address Details</label>
                        {/* Area */}
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="area"
                                        id="area"
                                        placeholder="Enter area"
                                        value={formData.area}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            {/* City */}
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Enter city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            {/* State */}
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="Enter state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            {/* Post Code */}
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="postCode"
                                        id="postCode"
                                        placeholder="Post Code"
                                        value={formData.postCode}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="bg-black hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
