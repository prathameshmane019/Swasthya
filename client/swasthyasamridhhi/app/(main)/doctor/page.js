'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleLogout() {
    try {
      // Check if MetaMask is connected
      if (window.ethereum && window.ethereum.isConnected()) {
        // Prompt the user to disconnect manually
        const confirmDisconnect = confirm("Please disconnect from MetaMask before logging out. Once disconnected, click OK to proceed.");
        
        if (!confirmDisconnect) {
          return; // Cancel the logout process if the user cancels the disconnection
        }
      }
      router.push("/");
      // Proceed with logout
      await signOut();
      
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-black text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
