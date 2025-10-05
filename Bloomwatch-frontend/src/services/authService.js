import api, { setAuthToken, removeAuthToken } from './api';

// Authentication service
const authService = {
  // User signup
  signup: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    if (response.token) {
      setAuthToken(response.token);
    }
    return response;
  },

  // User login
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.token) {
      setAuthToken(response.token);
    }
    return response;
  },

  // User logout
  logout: () => {
    removeAuthToken();
    localStorage.removeItem('user');
    localStorage.removeItem('farmLocation');
    localStorage.removeItem('selectedCrops');
  },

  // Get current user profile
  getCurrentUser: async () => {
    return await api.get('/auth/me');
  },

  // Update user profile
  updateProfile: async (userData) => {
    return await api.put('/auth/profile', userData);
  },
};

export default authService;
