"use client"
import { useState } from "react";
export default function Registration(props) {
    const [inputs, setInputs] = useState([{ firstName: "" }]);

    const handleAddInput = () => {
        setInputs([...inputs, { firstName: "" }]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
    };

    const handleInputClick = (event) => {
        // Prevent the click event from propagating to the parent elements
        event.stopPropagation();
    };
    return (
        <div className="flex items-center justify-center p-12 App">
            
            <div className="mx-auto w-full max-w-[550px] bg-white">
            <h1>Register as {props.type}</h1>
                <form>
                    <div className="mb-5">
                        <label
                            htmlFor="firstname"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            First Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="first-name"
                            placeholder="First Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="lastname"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Last Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="first-name"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="specs" className="mb-3 block text-base font-medium text-[#07074D]">
                            Specialization
                        </label>
                        <div className="container">
                            {inputs.map((item, index) => (
                                <div className="input_container" key={index}>
                                    <input
                                        className="border-1 h-10 mb-2"
                                        name="firstName"
                                        type="text"
                                        value={item.firstName}
                                        onChange={(event) => handleChange(event, index)}
                                        onClick={handleInputClick} // Prevent propagation here
                                    />
                                    {inputs.length > 1 && (
                                        <button className="ml-2" onClick={() => handleDeleteInput(index)}>Delete</button>
                                    )}
                                    {index === inputs.length - 1 && (
                                        <button className="ml-2" onClick={() => handleAddInput()}>Add</button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="lastname"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Hospital Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="hospital-name"
                            placeholder="Hospital Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="education"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Education
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="education"
                            placeholder="Education / Degree"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="license"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            License Number
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="first-name"
                            placeholder="License Number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="area"
                                        id="area"
                                        placeholder="Enter area"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Enter city"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="Enter state"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="post-code"
                                        id="post-code"
                                        placeholder="Post Code"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-black hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}



