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
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize hydration state
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Initialize auth state from localStorage after hydration
  useEffect(() => {
    if (!isHydrated) return;

    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        const tokenExpiry = localStorage.getItem('tokenExpiry');
        
        if (!storedToken || !tokenExpiry) {
          console.log('No token found');
          setLoading(false);
          return;
        }

        const now = new Date().getTime();
        const expiryTime = parseInt(tokenExpiry);
        
        // Check if token is expired
        if (now >= expiryTime) {
          console.log('Token expired, clearing storage');
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiry');
          setLoading(false);
          return;
        }

        console.log('Token found, verifying with backend...');
        setToken(storedToken);
        
        // Verify token with backend
        try {
          const response = await fetch('http://localhost:3001/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            console.log('User authenticated:', data.user.email);
          } else {
            console.log('Token invalid, clearing storage');
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry');
            setToken(null);
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiry');
          setToken(null);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [isHydrated]);

  // Login function
  const login = async (email, password) => {
    try {
      console.log('Attempting login...');
      
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token with expiry
        const expiryTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
        localStorage.setItem('token', data.token);
        localStorage.setItem('tokenExpiry', expiryTime.toString());
        
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
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token with expiry
        const expiryTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
        localStorage.setItem('token', data.token);
        localStorage.setItem('tokenExpiry', expiryTime.toString());
        
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
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
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
  };

  // Show loading during hydration to prevent mismatch
  if (!isHydrated) {
    return (
      <AuthContext.Provider value={{...value, loading: true}}>
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
