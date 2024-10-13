"use client"
import Signin from '@/components/signin';
import { useAuth } from '../provider'; // Ensure this path is correct
import { redirect } from 'next/navigation';

const SigninPage = () => {
  const { user } = useAuth(); // Ensure useAuth is correctly used

  if (user) {
    redirect('/'); // Redirect if user is already logged in
  }


  return <Signin />; // Pass handleLogin to Signin component
};

export default SigninPage;
