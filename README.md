# GeekyAnts Assignment Management System

A web application built with Next.js for managing assignments, engineers, and projects.

## Features

- **Dashboard**: Overview of current assignments and projects
- **Assignment Management**: Create, view, and manage assignments
- **Engineer Profiles**: Manage engineer information and assignments
- **Project Tracking**: Keep track of ongoing projects
- **Authentication**: Secure login system

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- TypeScript
- Tailwind CSS for styling
- Components built using a component library
- Server-side rendering for optimal performance

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/                  # Next.js app directory
├── assignments/      # Assignment-related pages
├── dashboard/        # Dashboard view
├── engineers/        # Engineer management
├── login/           # Authentication
├── my-assignments/  # Personal assignments view
└── projects/        # Project management

components/          # Reusable UI components
hooks/              # Custom React hooks
lib/                # Utility functions and shared logic
public/             # Static assets
styles/             # Global styles and CSS modules
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details