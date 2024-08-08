"use client"; // This marks the component as a Client Component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Ensure you use the correct import
import { auth, provider, signInWithPopup } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { logEvent } from "firebase/analytics";


const FacebookLogin: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user , setUser] = useState()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setIsAuthenticated(true);
        // Optionally redirect if user is already logged in
        
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);
        
      // Optionally log an event if you have Firebase Analytics initialized
    //   logEvent(analytics, 'login', { method: 'Facebook' });

      // Redirect to the homepage or any other page after login
      
    } catch (error) {
      console.error("Error during Facebook login", error);
    }
  };

  if (isAuthenticated === null) {
    // Optionally show a loading indicator while checking authentication
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    return (
      <button onClick={handleLogin} className="bg-blue-600 text-white py-2 px-4 rounded">
        Login with Facebook
      </button>
    );
  }

  return null; // or a different UI for logged-in users
};

export default FacebookLogin;
