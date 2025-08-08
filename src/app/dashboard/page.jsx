'use client'
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiGet } from '@/utils/apiCall';

export default function DashboardPage() {
  const { user, loading, logout, isAuthenticated } = useAuth();
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  // Fetch users list to test protected API call
  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const data = await apiGet('/auth/users');
      setUsers(data.users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* User Info Card */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Your Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-green-700">Name:</span>
              <span className="ml-2 text-green-800">{user?.name}</span>
            </div>
            <div>
              <span className="font-medium text-green-700">Email:</span>
              <span className="ml-2 text-green-800">{user?.email}</span>
            </div>
            <div>
              <span className="font-medium text-green-700">User ID:</span>
              <span className="ml-2 text-green-800 font-mono text-sm">{user?.id}</span>
            </div>
            <div>
              <span className="font-medium text-green-700">Member Since:</span>
              <span className="ml-2 text-green-800">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Test Protected API Call */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-blue-800">All Users (Protected Route Test)</h2>
            <button
              onClick={fetchUsers}
              disabled={loadingUsers}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              {loadingUsers ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>
          
          {users.length > 0 && (
            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-blue-800">{user.name}</h3>
                      <p className="text-blue-600 text-sm">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 text-sm">
                        Joined: {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
