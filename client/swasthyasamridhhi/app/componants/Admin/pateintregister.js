"use client"
import { useState } from "react";

export default function PatientRegistration(props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        gender: "",
        phone: "",
        address: {
            area: "",
            city: "",
            state: "",
            postCode: ""
        },
        bloodType: "",
        allergies: "",
        medications: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "area" || name === "city" || name === "state" || name === "postCode") {
            setFormData({
                ...formData,
                address: {
                    ...formData.address,
                    [name]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Replace with actual backend call
    };

    return (
        <div className="flex items-center justify-center p-12 App">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <h1>Patient Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="mb-3 block text-base font-medium text-[#07074D]">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="dob" className="mb-3 block text-base font-medium text-[#07074D]">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="gender" className="mb-3 block text-base font-medium text-[#07074D]">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Address</label>
                        <input
                            type="text"
                            name="area"
                            id="area"
                            placeholder="Area"
                            className="mb-2 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.address.area}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            className="mb-2 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-3"
                            value={formData.address.city}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="State"
                            className="mb-2 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-3"
                            value={formData.address.state}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="postCode"
                            id="postCode"
                            placeholder="Post Code"
                            className="mb-2 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-3"
                            value={formData.address.postCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="bloodType" className="mb-3 block text-base font-medium text-[#07074D]">Blood Type</label>
                        <input
                            type="text"
                            name="bloodType"
                            id="bloodType"
                            placeholder="Blood Type"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.bloodType}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="allergies" className="mb-3 block text-base font-medium text-[#07074D]">Allergies</label>
                        <input
                            type="text"
                            name="allergies"
                            id="allergies"
                            placeholder="Allergies"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.allergies}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="medications" className="mb-3 block text-base font-medium text-[#07074D]">Medications</label>
                        <input
                            type="text"
                            name="medications"
                            id="medications"
                            placeholder="Medications"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={formData.medications}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-black hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );  
}