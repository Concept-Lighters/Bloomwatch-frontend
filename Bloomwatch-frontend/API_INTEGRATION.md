# Bloomwatch Frontend - Backend API Integration

This document describes the backend API integration implemented in the Bloomwatch frontend application.

## Configuration

### Environment Variables

The backend API URL is configured using environment variables. Create a `.env` file in the root directory (use `.env.example` as a template):

```
VITE_API_BASE_URL=http://localhost:3000/api
```

For production, update this to point to your production backend URL.

## API Services

The application includes the following service modules in `src/services/`:

### 1. Authentication Service (`authService.js`)
- **signup(userData)** - Register a new user
- **login(credentials)** - Login with email and password
- **logout()** - Logout and clear local storage
- **getCurrentUser()** - Get current user profile
- **updateProfile(userData)** - Update user profile

### 2. Farm Service (`farmService.js`)
- **setupLocation(locationData)** - Save farm location
- **getLocation()** - Get farm location
- **updateLocation(locationData)** - Update farm location
- **setupCrops(cropsData)** - Save selected crops
- **getCrops()** - Get farm crops
- **updateCrops(cropsData)** - Update crops
- **getFarmDetails()** - Get complete farm details

### 3. Weather Service (`weatherService.js`)
- **getWeather(location)** - Get current weather data
- **getForecast(location)** - Get weather forecast
- **getAlerts(location)** - Get weather alerts

### 4. Tasks Service (`tasksService.js`)
- **getTasks()** - Get all tasks
- **getTask(taskId)** - Get task by ID
- **createTask(taskData)** - Create new task
- **updateTask(taskId, taskData)** - Update task
- **deleteTask(taskId)** - Delete task
- **completeTask(taskId)** - Mark task as complete
- **getUpcomingTasks()** - Get upcoming tasks

### 5. Community Service (`communityService.js`)
- **getUpdates(page, limit)** - Get community updates
- **getUpdate(updateId)** - Get update by ID
- **createUpdate(updateData)** - Create new update
- **likeUpdate(updateId)** - Like an update
- **commentOnUpdate(updateId, commentData)** - Comment on update
- **getComments(updateId)** - Get comments for an update

## Expected Backend API Endpoints

The frontend expects the following API endpoints from the backend:

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Farm Management
- `POST /api/farm/location` - Setup farm location
- `GET /api/farm/location` - Get farm location
- `PUT /api/farm/location` - Update farm location
- `POST /api/farm/crops` - Setup crops
- `GET /api/farm/crops` - Get crops
- `PUT /api/farm/crops` - Update crops
- `GET /api/farm/details` - Get farm details

### Weather
- `GET /api/weather?district=X&region=Y` - Get weather data
- `GET /api/weather/forecast?district=X&region=Y` - Get forecast
- `GET /api/weather/alerts?district=X&region=Y` - Get alerts

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/complete` - Mark as complete
- `GET /api/tasks/upcoming` - Get upcoming tasks

### Community
- `GET /api/community/updates?page=X&limit=Y` - Get updates
- `GET /api/community/updates/:id` - Get update by ID
- `POST /api/community/updates` - Create update
- `POST /api/community/updates/:id/like` - Like update
- `POST /api/community/updates/:id/comments` - Add comment
- `GET /api/community/updates/:id/comments` - Get comments

## Authentication Flow

1. User signs up or logs in
2. Backend returns a JWT token
3. Token is stored in `localStorage` as `authToken`
4. All subsequent API requests include the token in the `Authorization` header as `Bearer <token>`

## Error Handling

All API calls include error handling:
- Network errors are caught and logged
- User-friendly error messages are displayed in the UI
- Failed API calls fall back to default/cached data where appropriate

## Components Updated

The following components have been updated to use the backend API:

1. **Login.jsx** - Integrated login API
2. **SignUp.jsx** - Integrated signup API
3. **FarmLocationSetup.jsx** - Saves location to backend
4. **ChooseYourCrops.jsx** - Saves crops to backend
5. **Dashboard.jsx** - Fetches weather, tasks, and community updates
6. **NewTask.jsx** - Creates tasks via API
7. **CalendarScreen.jsx** - Fetches tasks from API

## Testing the Integration

To test the integration with a local backend:

1. Start your backend server (default: http://localhost:3000)
2. Update `.env` if needed
3. Run the frontend: `npm run dev`
4. Test authentication flow: signup → login
5. Test farm setup: location → crops
6. Test dashboard data loading
7. Test task creation

## Fallback Behavior

If the backend is not available, the application will:
- Display error messages to users
- Use default/mock data for weather and tasks on the dashboard
- Allow navigation but show errors on form submissions
- Prevent broken UI by handling errors gracefully

## Future Improvements

- Add retry logic for failed API calls
- Implement request caching
- Add offline support with service workers
- Add more comprehensive error handling
- Add loading skeletons for better UX
- Implement API rate limiting handling
- Add request/response interceptors for logging
