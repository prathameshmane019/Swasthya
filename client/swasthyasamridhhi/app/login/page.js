"use client"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        router.replace("/doctor");
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div>
      <h1>Welcome to my site!</h1>
      <p>Please select an option below to continue:</p>
      <button onClick={handleMetamaskLogin} disabled={!isMetamaskInstalled}>
        Login with MetaMask
      </button>
      <br />
      <br />
      <Link href="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
}
