import api from './api';

// Community service
const communityService = {
  // Get community updates
  getUpdates: async (page = 1, limit = 10) => {
    return await api.get(`/community/updates?page=${page}&limit=${limit}`);
  },

  // Get update by ID
  getUpdate: async (updateId) => {
    return await api.get(`/community/updates/${updateId}`);
  },

  // Create new update
  createUpdate: async (updateData) => {
    return await api.post('/community/updates', updateData);
  },

  // Like an update
  likeUpdate: async (updateId) => {
    return await api.post(`/community/updates/${updateId}/like`, {});
  },

  // Comment on update
  commentOnUpdate: async (updateId, commentData) => {
    return await api.post(`/community/updates/${updateId}/comments`, commentData);
  },

  // Get comments for an update
  getComments: async (updateId) => {
    return await api.get(`/community/updates/${updateId}/comments`);
  },
};

export default communityService;
