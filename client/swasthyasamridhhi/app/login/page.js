"use client"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import LoginForm from '../componants/Login/Loginfrom';

import { useRouter } from 'next/navigation'; // Changed to 'next/router'


export default function HomePage() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const router = useRouter();


  useEffect(() => {

    setIsMetamaskInstalled(!!window.ethereum);
  }, []);

  async function handleMetamaskLogin() {
    try {
      if (!isMetamaskInstalled) {
        throw new Error('MetaMask is not installed');
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
   

      // Authenticate the user using NextAuth and redirect to a protected route
      const result = await signIn('credentials',{
        address,
        redirect: false,
      });


      if(result!='undefined'){
        console.log("logged in successfull");

      // Request access to the user's MetaMask accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the user's Ethereum address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Authenticate the user using NextAuth and redirect to a protected route
      const result = await signIn('credentials', {
        address,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      } else {
        console.log("Logged in successfully");

       router.push("doctor")

      }}
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

      <h1>Metamask login</h1>
      <p>Please select an option below to continue:</p>
      <button onClick={handleMetamaskLogin} disabled={!isMetamaskInstalled} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
        Login with MetaMask
      </button>
      <br />
      <br />
      <Link href="/signup">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          Signup
        </button>
      </Link>
      {/* <LoginForm></LoginForm> */}
    </div>
  );
}
