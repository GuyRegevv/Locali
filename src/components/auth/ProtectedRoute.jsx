'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Component that protects routes requiring authentication
 * Redirects unauthenticated users to login page
 */
export const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || loading) return;
    
    if (!isAuthenticated()) {
      console.log('User not authenticated, redirecting to:', redirectTo);
      router.push(redirectTo);
      setShouldRender(false);
    } else {
      console.log('User authenticated, rendering protected content');
      setShouldRender(true);
    }
  }, [isMounted, loading, isAuthenticated, router, redirectTo]);

  // Show loading while checking authentication or during mount
  if (!isMounted || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!shouldRender) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Redirecting...</div>
      </div>
    );
  }

  // Render protected content
  return children;
};

/**
 * Component that redirects authenticated users away from auth pages
 * Useful for login/signup pages
 */
export const PublicRoute = ({ children, redirectTo = '/dashboard' }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || loading) return;
    
    if (isAuthenticated()) {
      console.log('User already authenticated, redirecting to:', redirectTo);
      router.push(redirectTo);
      setShouldRender(false);
    } else {
      console.log('User not authenticated, rendering public content');
      setShouldRender(true);
    }
  }, [isMounted, loading, isAuthenticated, router, redirectTo]);

  // Show loading while checking authentication or during mount
  if (!isMounted || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!shouldRender) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Redirecting...</div>
      </div>
    );
  }

  // Render public content
  return children;
};