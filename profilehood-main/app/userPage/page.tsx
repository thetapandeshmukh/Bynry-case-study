"use client"
import User from '@/components/user';
import { useAuth } from '../provider'; // Ensure this path is correct
import { redirect } from 'next/navigation';

const UserPage = () => {
  const { user } = useAuth(); // Ensure useAuth is correctly used

  if (!user) {
    redirect('/signin'); // Redirect if user is already logged in
  }


  return <User />; // Pass handleLogin to Signin component
};

export default UserPage;
