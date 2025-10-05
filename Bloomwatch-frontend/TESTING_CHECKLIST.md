# Testing Checklist for Backend API Integration

This checklist helps ensure the backend API integration is working correctly once the backend is deployed.

## Prerequisites
- [ ] Backend API is deployed and accessible
- [ ] Backend URL is configured in `.env` file
- [ ] Frontend application is running (`npm run dev`)

## Authentication Tests

### Signup Flow
- [ ] Navigate to `/signup`
- [ ] Fill in all required fields:
  - [ ] Full Name
  - [ ] Date of Birth
  - [ ] Gender
  - [ ] Phone Number
  - [ ] Password
- [ ] Submit form
- [ ] Verify no error messages appear
- [ ] Verify redirect to farm setup page (`/farm-setup`)
- [ ] Check browser localStorage for `authToken` and `user` data
- [ ] Verify token is a valid JWT

### Login Flow
- [ ] Navigate to `/login`
- [ ] Enter email and password
- [ ] Submit form
- [ ] Verify no error messages appear
- [ ] Verify redirect to appropriate page:
  - [ ] `/farm-setup` if farm not set up
  - [ ] `/dashboard` if farm already set up
- [ ] Check browser localStorage for `authToken` and `user` data

### Error Handling
- [ ] Try signup with invalid data (verify error messages)
- [ ] Try login with wrong credentials (verify error message)
- [ ] Try login without internet (verify error message)

## Farm Setup Tests

### Location Setup
- [ ] Navigate to `/farm-setup`
- [ ] Select a region from dropdown
- [ ] Select a district from dropdown
- [ ] Click "Next" button
- [ ] Verify loading state appears
- [ ] Verify no error messages
- [ ] Verify redirect to `/choose-crops`
- [ ] Check network tab for successful POST to `/api/farm/location`
- [ ] Check localStorage for `farmLocation` data

### Crops Selection
- [ ] On `/choose-crops` page
- [ ] Select at least one crop
- [ ] Click "Complete Setup" button
- [ ] Verify loading state appears
- [ ] Verify no error messages
- [ ] Verify redirect to `/dashboard`
- [ ] Check network tab for successful POST to `/api/farm/crops`
- [ ] Check localStorage for `selectedCrops` data

## Dashboard Tests

### Weather Data
- [ ] On `/dashboard` page
- [ ] Verify weather card displays:
  - [ ] Temperature
  - [ ] Weather condition
  - [ ] Humidity percentage
  - [ ] Wind speed
- [ ] Check network tab for GET to `/api/weather`
- [ ] Verify weather data updates when changing location

### Tasks Data
- [ ] Verify "Upcoming Tasks" section displays
- [ ] Check if tasks have:
  - [ ] Title
  - [ ] Crop label
  - [ ] Due date
  - [ ] Checkbox
- [ ] Check network tab for GET to `/api/tasks/upcoming`

### Community Updates
- [ ] Verify "Community Updates" section displays
- [ ] Check network tab for GET to `/api/community/updates`
- [ ] Verify updates show user names, locations, and content

### User Greeting
- [ ] Verify greeting shows correct user name from signup
- [ ] Check that user name matches data in localStorage

## Task Management Tests

### Create Task
- [ ] Navigate to `/calendar`
- [ ] Click "New Task" or navigate to `/new-task`
- [ ] Fill in task details:
  - [ ] Task name
  - [ ] Date
  - [ ] Time
  - [ ] Select crop
  - [ ] Select task type
  - [ ] Add notes (optional)
- [ ] Click "Complete Task" button
- [ ] Verify loading state appears
- [ ] Verify no error messages
- [ ] Verify redirect to `/calendar`
- [ ] Check network tab for successful POST to `/api/tasks`
- [ ] Verify new task appears in calendar

### View Tasks
- [ ] Navigate to `/calendar`
- [ ] Verify tasks are displayed on calendar
- [ ] Check network tab for GET to `/api/tasks`

## Error Scenarios

### Network Errors
- [ ] Disable network/wifi
- [ ] Try to login (should show network error)
- [ ] Try to submit farm setup (should show error)
- [ ] Try to create task (should show error)
- [ ] Verify app doesn't crash
- [ ] Verify fallback to default data on dashboard

### Authentication Errors
- [ ] Clear localStorage
- [ ] Try to access `/dashboard` directly
- [ ] Verify redirect to login or error handling
- [ ] Try API call with invalid token
- [ ] Verify 401 error is handled properly

### Validation Errors
- [ ] Try to submit signup with missing fields
- [ ] Try to submit farm setup without selections
- [ ] Try to create task with missing required fields
- [ ] Verify error messages are clear and helpful

## API Response Validation

### Check Backend Responses
For each API call, verify the response structure matches expectations:

#### Signup/Login Response
```json
{
  "token": "jwt.token.here",
  "user": {
    "id": "user-id",
    "fullName": "User Name",
    "email": "user@example.com",
    "farmSetupComplete": false
  }
}
```

#### Weather Response
```json
{
  "temperature": 28,
  "condition": "Partly Cloudy",
  "humidity": 76,
  "windSpeed": 12,
  "prediction": "Weather prediction text"
}
```

#### Tasks Response
```json
{
  "tasks": [
    {
      "id": "task-id",
      "title": "Task Title",
      "date": "2025-10-10",
      "time": "07:00 AM",
      "crop": "Maize(Corn)",
      "taskType": "fertilizer",
      "checked": false
    }
  ]
}
```

## Performance Tests

- [ ] Measure page load times
- [ ] Check for unnecessary re-renders
- [ ] Verify API calls are not duplicated
- [ ] Check network tab for efficient request patterns
- [ ] Verify images and assets load properly

## Browser Compatibility

Test on multiple browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Edge

## Mobile Responsiveness

- [ ] Test on mobile viewport
- [ ] Verify all forms are usable on mobile
- [ ] Check touch interactions work properly
- [ ] Verify responsive layouts work correctly

## Security Checks

- [ ] Verify token is stored securely
- [ ] Check that passwords are not logged
- [ ] Verify no sensitive data in console logs
- [ ] Test logout clears all user data
- [ ] Verify protected routes require authentication

## Final Verification

- [ ] All core user flows work end-to-end
- [ ] No console errors or warnings
- [ ] No network errors in production
- [ ] All loading states work properly
- [ ] All error messages are user-friendly
- [ ] App is production-ready

## Issues Found

Document any issues found during testing:

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
|       |          |             |        |

## Notes

Use this section to document any additional findings or observations during testing.
