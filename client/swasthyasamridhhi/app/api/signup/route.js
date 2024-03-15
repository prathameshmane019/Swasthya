import { ethers } from 'ethers';
import { connectMongoDB } from '@/app/libs/connectDb'
import { NextResponse } from 'next/server';
import User from '@/app/models/user';


export async function POST(req) {
    connectMongoDB();
    console.log("Trying")
    const {name ,email} = await req.json();

    
    const wallet = ethers.Wallet.createRandom();

    // Get the address and private key of the new wallet
    
    const blockchainAddress = wallet.address;
    const blockchainPrivateKey = wallet.privateKey;
    console.log(blockchainAddress);
    // Save user data in MongoDB      
    const newUser = new User({ name, email, blockchainAddress });
    await newUser.save();
    return NextResponse.json({message:"User registered"})
}