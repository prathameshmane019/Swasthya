import { NextResponse } from 'next/server';
import Doctor from '../../../models/doctor'; // Import the Doctor model
import { connectMongoDB } from "../../../libs/connectDb";

export async function POST(req) {
    connectMongoDB();
    console.log("Trying");
    const doctorData = await req.json();

    try {
        const newDoctor = new Doctor(doctorData);
        await newDoctor.save();
    } catch (error) {
        // Handle any errors
        console.error("Error:", error);
        return NextResponse.error("Failed to register doctor", 500); // Return an error response
    }

    return NextResponse.json({ message: "Doctor registered successfully" }); // Return a success response
}
