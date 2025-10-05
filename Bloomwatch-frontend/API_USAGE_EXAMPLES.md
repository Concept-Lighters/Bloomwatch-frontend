# API Usage Examples

This document provides practical examples of how to use the API services in the Bloomwatch frontend application.

## Authentication Examples

### User Signup
```javascript
import authService from '../services/authService';

const handleSignup = async () => {
  try {
    const userData = {
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      phoneNumber: "0201234567",
      password: "securePassword123"
    };
    
    const response = await authService.signup(userData);
    console.log('Signup successful:', response);
    // Token is automatically stored in localStorage
    // Navigate to farm setup or dashboard
  } catch (error) {
    console.error('Signup failed:', error.message);
  }
};
```

### User Login
```javascript
import authService from '../services/authService';

const handleLogin = async () => {
  try {
    const credentials = {
      email: "user@example.com",
      password: "securePassword123"
    };
    
    const response = await authService.login(credentials);
    console.log('Login successful:', response);
    // Token is automatically stored in localStorage
    // Navigate based on user.farmSetupComplete status
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};
```

### Get Current User
```javascript
import authService from '../services/authService';

const fetchUserProfile = async () => {
  try {
    const user = await authService.getCurrentUser();
    console.log('User profile:', user);
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
  }
};
```

### Logout
```javascript
import authService from '../services/authService';

const handleLogout = () => {
  authService.logout();
  // This clears the token and user data from localStorage
  // Navigate to login page
};
```

## Farm Management Examples

### Setup Farm Location
```javascript
import farmService from '../services/farmService';

const saveFarmLocation = async () => {
  try {
    const locationData = {
      region: "Greater Accra",
      district: "Accra Metro"
    };
    
    const response = await farmService.setupLocation(locationData);
    console.log('Location saved:', response);
  } catch (error) {
    console.error('Failed to save location:', error.message);
  }
};
```

### Setup Crops
```javascript
import farmService from '../services/farmService';

const saveCrops = async () => {
  try {
    const cropsData = {
      crops: ["Maize(Corn)", "Cassava", "Rice"]
    };
    
    const response = await farmService.setupCrops(cropsData);
    console.log('Crops saved:', response);
  } catch (error) {
    console.error('Failed to save crops:', error.message);
  }
};
```

### Get Farm Details
```javascript
import farmService from '../services/farmService';

const fetchFarmDetails = async () => {
  try {
    const farmDetails = await farmService.getFarmDetails();
    console.log('Farm details:', farmDetails);
  } catch (error) {
    console.error('Failed to fetch farm details:', error.message);
  }
};
```

## Weather Examples

### Get Current Weather
```javascript
import weatherService from '../services/weatherService';

const fetchWeather = async () => {
  try {
    const location = {
      district: "Accra Metro",
      region: "Greater Accra"
    };
    
    const weather = await weatherService.getWeather(location);
    console.log('Current weather:', weather);
    // Expected response: { temperature, condition, humidity, windSpeed, prediction }
  } catch (error) {
    console.error('Failed to fetch weather:', error.message);
  }
};
```

### Get Weather Forecast
```javascript
import weatherService from '../services/weatherService';

const fetchForecast = async () => {
  try {
    const location = {
      district: "Accra Metro",
      region: "Greater Accra"
    };
    
    const forecast = await weatherService.getForecast(location);
    console.log('Weather forecast:', forecast);
  } catch (error) {
    console.error('Failed to fetch forecast:', error.message);
  }
};
```

## Tasks Examples

### Create New Task
```javascript
import tasksService from '../services/tasksService';

const createTask = async () => {
  try {
    const taskData = {
      title: "Apply Fertilizer to Maize",
      date: "2025-10-10",
      time: "07:00 AM",
      crop: "Maize(Corn)",
      taskType: "fertilizer",
      notes: "Use NPK fertilizer"
    };
    
    const response = await tasksService.createTask(taskData);
    console.log('Task created:', response);
  } catch (error) {
    console.error('Failed to create task:', error.message);
  }
};
```

### Get All Tasks
```javascript
import tasksService from '../services/tasksService';

const fetchTasks = async () => {
  try {
    const response = await tasksService.getTasks();
    console.log('All tasks:', response.tasks);
  } catch (error) {
    console.error('Failed to fetch tasks:', error.message);
  }
};
```

### Get Upcoming Tasks
```javascript
import tasksService from '../services/tasksService';

const fetchUpcomingTasks = async () => {
  try {
    const response = await tasksService.getUpcomingTasks();
    console.log('Upcoming tasks:', response.tasks);
  } catch (error) {
    console.error('Failed to fetch upcoming tasks:', error.message);
  }
};
```

### Complete a Task
```javascript
import tasksService from '../services/tasksService';

const markTaskComplete = async (taskId) => {
  try {
    const response = await tasksService.completeTask(taskId);
    console.log('Task completed:', response);
  } catch (error) {
    console.error('Failed to complete task:', error.message);
  }
};
```

### Update a Task
```javascript
import tasksService from '../services/tasksService';

const updateTask = async (taskId) => {
  try {
    const updatedData = {
      title: "Apply Fertilizer to Maize - Updated",
      date: "2025-10-11"
    };
    
    const response = await tasksService.updateTask(taskId, updatedData);
    console.log('Task updated:', response);
  } catch (error) {
    console.error('Failed to update task:', error.message);
  }
};
```

### Delete a Task
```javascript
import tasksService from '../services/tasksService';

const deleteTask = async (taskId) => {
  try {
    await tasksService.deleteTask(taskId);
    console.log('Task deleted successfully');
  } catch (error) {
    console.error('Failed to delete task:', error.message);
  }
};
```

## Community Examples

### Get Community Updates
```javascript
import communityService from '../services/communityService';

const fetchCommunityUpdates = async () => {
  try {
    const response = await communityService.getUpdates(1, 10); // page 1, 10 items
    console.log('Community updates:', response.updates);
  } catch (error) {
    console.error('Failed to fetch updates:', error.message);
  }
};
```

### Create an Update
```javascript
import communityService from '../services/communityService';

const createUpdate = async () => {
  try {
    const updateData = {
      title: "Successful Harvest",
      content: "Just harvested my maize crop!",
      location: "Kumasi",
      image: "/path/to/image.jpg"
    };
    
    const response = await communityService.createUpdate(updateData);
    console.log('Update created:', response);
  } catch (error) {
    console.error('Failed to create update:', error.message);
  }
};
```

### Like an Update
```javascript
import communityService from '../services/communityService';

const likeUpdate = async (updateId) => {
  try {
    const response = await communityService.likeUpdate(updateId);
    console.log('Update liked:', response);
  } catch (error) {
    console.error('Failed to like update:', error.message);
  }
};
```

### Comment on Update
```javascript
import communityService from '../services/communityService';

const addComment = async (updateId) => {
  try {
    const commentData = {
      text: "Great work! Congratulations on the harvest."
    };
    
    const response = await communityService.commentOnUpdate(updateId, commentData);
    console.log('Comment added:', response);
  } catch (error) {
    console.error('Failed to add comment:', error.message);
  }
};
```

## Using in React Components

### Example: Dashboard Component with Data Fetching
```javascript
import React, { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';
import tasksService from '../services/tasksService';

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get location from localStorage
      const location = JSON.parse(localStorage.getItem('farmLocation') || '{}');

      // Fetch weather
      if (location.district && location.region) {
        const weatherData = await weatherService.getWeather(location);
        setWeather(weatherData);
      }

      // Fetch tasks
      const tasksData = await tasksService.getUpcomingTasks();
      setTasks(tasksData.tasks || []);

    } catch (err) {
      setError(err.message);
      console.error('Dashboard data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {weather && (
        <div>
          <h2>Weather</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
      {tasks.length > 0 && (
        <div>
          <h2>Upcoming Tasks</h2>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

## Error Handling Best Practices

### Handle Network Errors
```javascript
const fetchDataWithErrorHandling = async () => {
  try {
    const data = await someService.getData();
    return data;
  } catch (error) {
    // Log to console for debugging
    console.error('API Error:', error);
    
    // Show user-friendly message
    if (error.message.includes('NetworkError')) {
      alert('Network error. Please check your internet connection.');
    } else if (error.message.includes('401')) {
      alert('Session expired. Please log in again.');
      // Redirect to login
    } else {
      alert('An error occurred. Please try again.');
    }
    
    // Return fallback data or throw
    return null;
  }
};
```

### Using Loading States
```javascript
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (data) => {
  setLoading(true);
  setError('');
  
  try {
    await someService.submitData(data);
    // Success - navigate or show success message
  } catch (err) {
    setError(err.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};
```

## Testing API Calls

### Test with Mock Data
```javascript
// For development/testing without backend
const mockWeatherData = {
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 76,
  windSpeed: 12
};

const fetchWeather = async () => {
  try {
    const data = await weatherService.getWeather(location);
    return data;
  } catch (error) {
    console.error('API failed, using mock data:', error);
    return mockWeatherData; // Fallback to mock data
  }
};
```

## Notes

- Always handle errors gracefully
- Provide loading states for better UX
- Use fallback data when appropriate
- Log errors for debugging
- Keep sensitive data out of logs
- Validate data before sending to API
