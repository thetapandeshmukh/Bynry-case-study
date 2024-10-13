"use client"
import Signup from '@/components/signup';
import { useAuth } from '../provider'; // Ensure this path is correct
import { redirect } from 'next/navigation';

const SignupPage = () => {
  const { user } = useAuth(); // Ensure useAuth is correctly used

  if (user) {
    redirect('/'); // Redirect if user is already logged in
  }


  return <Signup />; // Pass handleLogin to Signin component
};

export default SignupPage;
