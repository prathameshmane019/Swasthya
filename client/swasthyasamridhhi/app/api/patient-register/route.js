
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/app/libs/connectDb";
import User from "@/app/models/user";
export async function POST(req) {
    connectMongoDB();
    const { name, age } = await req.json();
      const newData = new User({
        name,
        age,
      });
      await newData.save();
      const users = await User.find();
      console.log(users);
    console.log(name,age);
    return NextResponse.json({message:"Data displayed"})
}