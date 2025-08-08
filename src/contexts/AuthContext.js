'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if we're in the browser (not SSR)
        if (typeof window !== 'undefined') {
          const storedToken = localStorage.getItem('token');
          
          if (storedToken) {
            setToken(storedToken);
            // Verify token with backend
            await getCurrentUser(storedToken);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid token
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for logout events from apiCall
    const handleLogoutEvent = () => {
      logout();
    };

    window.addEventListener('auth-logout', handleLogoutEvent);

    return () => {
      window.removeEventListener('auth-logout', handleLogoutEvent);
    };
  }, []);

  // Get current user from backend
  const getCurrentUser = async (authToken = token) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        return data.user;
      } else {
        // Token is invalid
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error('Get current user error:', error);
      // Clear invalid token
      logout();
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage (client-side only)
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
        }
        setToken(data.token);
        setUser(data.user);
        
        console.log('Login successful:', data.user.email);
        return { success: true, user: data.user };
      } else {
        console.error('Login failed:', data.error);
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error' };
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage (client-side only)
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
        }
        setToken(data.token);
        setUser(data.user);
        
        console.log('Registration successful:', data.user.email);
        return { success: true, user: data.user };
      } else {
        console.error('Registration failed:', data.error);
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Network error' };
    }
  };

  // Logout function
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setToken(null);
    setUser(null);
    console.log('User logged out');
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user && !!token;
  };

  // Get authorization header for API calls
  const getAuthHeader = () => {
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
    getAuthHeader,
    getCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
