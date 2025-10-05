import api from './api';

// Farm service
const farmService = {
  // Setup farm location
  setupLocation: async (locationData) => {
    return await api.post('/farm/location', locationData);
  },

  // Get farm location
  getLocation: async () => {
    return await api.get('/farm/location');
  },

  // Update farm location
  updateLocation: async (locationData) => {
    return await api.put('/farm/location', locationData);
  },

  // Setup crops
  setupCrops: async (cropsData) => {
    return await api.post('/farm/crops', cropsData);
  },

  // Get farm crops
  getCrops: async () => {
    return await api.get('/farm/crops');
  },

  // Update crops
  updateCrops: async (cropsData) => {
    return await api.put('/farm/crops', cropsData);
  },

  // Get farm details
  getFarmDetails: async () => {
    return await api.get('/farm/details');
  },
};

export default farmService;
