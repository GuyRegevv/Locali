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

  // Helper function to store token with expiry (7 days as per backend)
  const storeToken = (tokenValue) => {
    if (typeof window !== 'undefined') {
      const expiryTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
      localStorage.setItem('token', tokenValue);
      localStorage.setItem('tokenExpiry', expiryTime.toString());
    }
    setToken(tokenValue);
  };

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if we're in the browser (not SSR)
        if (typeof window !== 'undefined') {
          const storedToken = localStorage.getItem('token');
          const tokenExpiry = localStorage.getItem('tokenExpiry');
          
          if (storedToken && tokenExpiry) {
            const now = new Date().getTime();
            const expiryTime = parseInt(tokenExpiry);
            
            // Check if token is expired
            if (now >= expiryTime) {
              console.log('Token expired, clearing storage');
              localStorage.removeItem('token');
              localStorage.removeItem('tokenExpiry');
              setToken(null);
              setUser(null);
            } else {
              setToken(storedToken);
              // Verify token with backend
              await getCurrentUser(storedToken);
            }
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid token
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiry');
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

    // Listen for storage events (logout in another tab)
    const handleStorageEvent = (e) => {
      if (e.key === 'token' && !e.newValue) {
        // Token was removed in another tab
        logout();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('auth-logout', handleLogoutEvent);
      window.addEventListener('storage', handleStorageEvent);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('auth-logout', handleLogoutEvent);
        window.removeEventListener('storage', handleStorageEvent);
      }
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
        // Store token with expiry
        storeToken(data.token);
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
        // Store token with expiry
        storeToken(data.token);
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
      localStorage.removeItem('tokenExpiry');
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
