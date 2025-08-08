'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Component that redirects authenticated users away from auth pages
 * Useful for login/signup pages
 */
export const PublicRoute = ({ children, redirectTo = '/dashboard' }) => {
  const { user, token, loading } = useAuth();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (loading) return; // Wait for auth to load
    
    const isAuthenticated = !!user && !!token;
    
    if (isAuthenticated) {
      console.log('User authenticated, redirecting from public route to:', redirectTo);
      router.push(redirectTo);
      setShouldRender(false);
    } else {
      console.log('User not authenticated, rendering public content');
      setShouldRender(true);
    }
  }, [loading, user, token, router, redirectTo]);

  // Show loading while checking authentication
  if (loading) {
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
