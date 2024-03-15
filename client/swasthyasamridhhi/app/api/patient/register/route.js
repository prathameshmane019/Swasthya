import { NextResponse } from 'next/server';
import Patient from '../../../models/patient';
import { connectMongoDB } from "../../../libs/connectDb";

export async function POST(req) {
    connectMongoDB();
    console.log("Trying");
    
    try {
        const patientData = await req.json();
        console.log("Received patient data:", patientData);

        const newPatient = new Patient(patientData);
        await newPatient.save();

        return NextResponse.json({ message: "Patient registered successfully", data: newPatient });
    } catch (error) {
        console.error("Error registering patient:", error);
        return NextResponse.json({ message: "Patient not registered", error: error });
    }
}
