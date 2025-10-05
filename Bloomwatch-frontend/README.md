# Bloomwatch Frontend

A comprehensive farm management application built with React and Vite, featuring real-time weather data, task management, and community features for farmers.

## Features

- 🌾 **Farm Management** - Setup and manage your farm location and crops
- 🌤️ **Weather Integration** - Real-time weather data and forecasts
- ✅ **Task Management** - Create and track farming tasks
- 👥 **Community Updates** - Share and view updates from other farmers
- 🔐 **Authentication** - Secure user authentication with JWT
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Concept-Lighters/Bloomwatch-frontend.git
cd Bloomwatch-frontend/Bloomwatch-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and set your backend API URL:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Bloomwatch-frontend/
├── src/
│   ├── components/      # React components
│   ├── services/        # API service modules
│   ├── config/          # Configuration files
│   ├── assets/          # Static assets
│   └── main.jsx         # Application entry point
├── public/              # Public assets
├── .env.example         # Environment variables template
└── package.json         # Project dependencies
```

## Backend Integration

This frontend application requires the Bloomwatch backend API. See the following documentation for details:

- **[API_INTEGRATION.md](./API_INTEGRATION.md)** - Complete API integration documentation
- **[API_USAGE_EXAMPLES.md](./API_USAGE_EXAMPLES.md)** - Code examples for all API services
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Implementation overview and architecture
- **[TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md)** - Testing guide for API integration

### Environment Configuration

Create a `.env` file with the following:

```bash
# Backend API URL
VITE_API_BASE_URL=http://localhost:3000/api
```

For production:
```bash
VITE_API_BASE_URL=https://api.bloomwatch.com/api
```

## Technology Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Maps API** - Map integration

## API Services

The application includes the following service modules:

- `authService` - User authentication and profile management
- `farmService` - Farm location and crop management
- `weatherService` - Weather data and forecasts
- `tasksService` - Task CRUD operations
- `communityService` - Community updates and interactions

See [API_USAGE_EXAMPLES.md](./API_USAGE_EXAMPLES.md) for detailed usage examples.

## Development

### Code Quality

The project uses ESLint for code quality:

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Testing

Follow the [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) for comprehensive testing of all features.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Concept-Lighters.

## Support

For issues or questions, please open an issue in the GitHub repository.

---

**Built with ❤️ by Concept-Lighters**
