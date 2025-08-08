/**
 * Helper function for making authenticated API calls
 * Automatically handles JWT tokens and 401 responses
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const apiCall = async (endpoint, options = {}) => {
  try {
    // Get token from localStorage (client-side only)
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    
    // Prepare headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add Authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Make the request
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    // Handle 401 Unauthorized responses
    if (response.status === 401) {
      console.warn('Unauthorized request - clearing token');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Trigger logout in auth context
        window.dispatchEvent(new CustomEvent('auth-logout'));
      }
      
      throw new Error('Unauthorized - please login again');
    }

    // Parse JSON response
    const data = await response.json();

    // Handle other error responses
    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}`);
    }

    return data;

  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Convenience methods for different HTTP methods
export const apiGet = (endpoint, options = {}) => {
  return apiCall(endpoint, { ...options, method: 'GET' });
};

export const apiPost = (endpoint, data, options = {}) => {
  return apiCall(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const apiPut = (endpoint, data, options = {}) => {
  return apiCall(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const apiDelete = (endpoint, options = {}) => {
  return apiCall(endpoint, { ...options, method: 'DELETE' });
};

// Example usage:
// const users = await apiGet('/auth/users');
// const newPost = await apiPost('/posts', { title: 'Hello', content: 'World' });
// const updatedPost = await apiPut('/posts/123', { title: 'Updated' });
// await apiDelete('/posts/123');
