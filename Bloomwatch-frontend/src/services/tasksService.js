import api from './api';

// Tasks service
const tasksService = {
  // Get all tasks
  getTasks: async () => {
    return await api.get('/tasks');
  },

  // Get task by ID
  getTask: async (taskId) => {
    return await api.get(`/tasks/${taskId}`);
  },

  // Create new task
  createTask: async (taskData) => {
    return await api.post('/tasks', taskData);
  },

  // Update task
  updateTask: async (taskId, taskData) => {
    return await api.put(`/tasks/${taskId}`, taskData);
  },

  // Delete task
  deleteTask: async (taskId) => {
    return await api.delete(`/tasks/${taskId}`);
  },

  // Mark task as complete
  completeTask: async (taskId) => {
    return await api.patch(`/tasks/${taskId}/complete`, {});
  },

  // Get upcoming tasks
  getUpcomingTasks: async () => {
    return await api.get('/tasks/upcoming');
  },
};

export default tasksService;
