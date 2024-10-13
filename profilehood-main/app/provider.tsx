"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the user object
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

// Define the context type
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string, role: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

// Create a context for authentication
const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Function to log in
    const login = async (email: string, password: string, role: string): Promise<boolean> => {
        setIsLoading(true);
        try {
             // Check for users in local storage
            const storedUsers = localStorage.getItem('users'); // Assuming 'users' is the key for multiple users
            if (storedUsers) {
                const usersData = JSON.parse(storedUsers);
                // Find the user by email
                const userData = usersData.find((user: User) => user.email === email);
                // Check for email, password, and role
                if (userData && userData.password === password && userData.role === role) {
                    setUser(userData);
                    return true;
                }
            }
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // Function to log out
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // Check for existing session on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
