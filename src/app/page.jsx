'use client'
import { useState } from 'react';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon, MapPinIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/contexts/AuthContext';

export default function LandingPage() {
  const { login, register } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (authMode === 'signup') {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (authMode === 'signup' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setErrors({});

      try {
        let result;
        
        if (authMode === 'login') {
          // Login
          result = await login(formData.email, formData.password);
        } else {
          // Register
          const fullName = `${formData.firstName} ${formData.lastName}`;
          result = await register(fullName, formData.email, formData.password);
        }

        if (result.success) {
          console.log(`${authMode} successful, redirecting...`);
          setShowAuthDialog(false);
          window.location.href = '/home';
        } else {
          setErrors({ general: result.error || `${authMode} failed` });
        }
      } catch (error) {
        console.error(`${authMode} error:`, error);
        setErrors({ general: 'Network error. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const openAuthDialog = (mode) => {
    setAuthMode(mode);
    setShowAuthDialog(true);
    setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const closeAuthDialog = () => {
    setShowAuthDialog(false);
    setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
    setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  return (
    <>
      {/* Main Landing Content */}
      <div className="min-h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed]">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-8 py-16 text-center min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Local Experiences
              <span className="block text-green-600">Like Never Before</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with real locals who share authentic recommendations for food, culture, 
              and hidden gems in cities around the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => openAuthDialog('signup')}
                className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Exploring
              </button>
              
              <button
                onClick={() => openAuthDialog('login')}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-8 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Why Choose Locali?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#ddf9ce] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Local Expertise</h3>
                <p className="text-gray-600">Get recommendations from people who actually live there, not just tourists.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#ddf9ce] rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Hidden Gems</h3>
                <p className="text-gray-600">Discover authentic places that guidebooks don't tell you about.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#ddf9ce] rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Driven</h3>
                <p className="text-gray-600">Join a community of travelers and locals sharing real experiences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-8 py-16 bg-[#ddf9ce]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-gray-600">Cities Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">10K+</div>
                <div className="text-gray-600">Local Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">50K+</div>
                <div className="text-gray-600">Authentic Recommendations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Ready to explore the world like a local?{' '}
              <button
                onClick={() => openAuthDialog('signup')}
                className="text-green-600 hover:text-green-800 font-bold transition-colors"
              >
                Join Locali today
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Authentication Dialog */}
      {showAuthDialog && (
        <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl drop-shadow-2xl border border-gray-200 w-96 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {authMode === 'login' ? 'Welcome Back' : 'Join Locali'}
                </h2>
                <button
                  onClick={closeAuthDialog}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Display */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                    {errors.general}
                  </div>
                )}

                {/* Name Fields for Signup */}
                {authMode === 'signup' && (
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label htmlFor="firstName" className="block text-gray-700 mb-2 font-semibold text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={`w-full h-12 p-3 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                          errors.firstName ? 'border-red-400' : 'border-gray-300 focus:border-green-400'
                        }`}
                        placeholder="First name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <label htmlFor="lastName" className="block text-gray-700 mb-2 font-semibold text-sm">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={`w-full h-12 p-3 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                          errors.lastName ? 'border-red-400' : 'border-gray-300 focus:border-green-400'
                        }`}
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full h-12 p-3 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                      errors.email ? 'border-red-400' : 'border-gray-300 focus:border-green-400'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className={`w-full h-12 p-3 pr-10 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                        errors.password ? 'border-red-400' : 'border-gray-300 focus:border-green-400'
                      }`}
                      placeholder={authMode === 'login' ? "Enter your password" : "Create a password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field for Signup */}
                {authMode === 'signup' && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700 mb-2 font-semibold text-sm">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className={`w-full h-12 p-3 pr-10 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                          errors.confirmPassword ? 'border-red-400' : 'border-gray-300 focus:border-green-400'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>
                )}

                {/* Forgot Password Link for Login */}
                {authMode === 'login' && (
                  <div className="text-right">
                    <Link 
                      href="/forgot-password" 
                      className="text-xs text-green-600 hover:text-green-800 font-semibold transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                )}

                {/* Terms and Conditions for Signup */}
                {authMode === 'signup' && (
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 h-3 w-3 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-green-600 hover:text-green-800 font-semibold">
                        Terms
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-800 font-semibold">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-[#ddf9ce] border-2 border-green-400 text-green-800 font-bold rounded-xl hover:bg-green-100 hover:border-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isLoading 
                    ? (authMode === 'login' ? 'Signing in...' : 'Creating Account...') 
                    : (authMode === 'login' ? 'Sign In' : 'Create Account')
                  }
                </button>

                {/* Switch Mode */}
                <div className="text-center">
                  <p className="text-xs text-gray-600">
                    {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                      type="button"
                      onClick={switchAuthMode}
                      className="text-green-600 hover:text-green-800 font-bold transition-colors"
                    >
                      {authMode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 