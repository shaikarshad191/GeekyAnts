# Engineering Resource Management System

A comprehensive full-stack application for managing engineering team assignments across projects, tracking capacity allocation, and planning resource availability.

## 🚀 Features

### Authentication & User Roles
- **Manager Role**: Full access to assign engineers, manage projects, and view team analytics
- **Engineer Role**: View personal assignments, capacity, and project details
- Role-based navigation and access control

### Engineer Management
- Engineer profiles with skills, seniority levels, and employment types
- Capacity tracking (full-time 100%, part-time 50%)
- Skills-based filtering and search
- Availability calculation and monitoring

### Project Management
- Project creation with required skills and timelines
- Status tracking (Planning, Active, Completed)
- Team size requirements and skill matching
- Progress monitoring and deadline tracking

### Assignment System
- Assign engineers to projects with specific allocation percentages
- Visual capacity indicators and overallocation warnings
- Role-based assignments (Developer, Tech Lead, Architect, etc.)
- Timeline management with start/end dates

### Dashboard & Analytics
- **Manager Dashboard**: Team overview, skill gaps, overallocated engineers
- **Engineer Dashboard**: Personal assignments, capacity utilization
- Real-time capacity charts and project status
- Skills distribution analytics

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Recharts** for data visualization
- **Lucide React** for icons

### Backend & Data
- **Next.js API Routes** (Server Actions ready)
- **TypeScript** for type safety
- **Mock API** with comprehensive seed data
- **Local Storage** for demo authentication

### Development Tools
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

## 📊 Sample Data

The application includes comprehensive seed data:

- **12 Engineers** across different departments (Frontend, Backend, Full Stack, Mobile, DevOps, QA, Security, Data)
- **8 Projects** with varying complexity and requirements
- **19 Assignments** showing realistic allocation scenarios
- **3 Managers** overseeing different teams

### Engineer Distribution
- **Senior**: 5 engineers (42%)
- **Mid-level**: 4 engineers (33%)
- **Junior**: 3 engineers (25%)
- **Full-time**: 11 engineers (92%)
- **Part-time**: 1 engineer (8%)

### Project Status
- **Active**: 5 projects
- **Planning**: 2 projects  
- **Completed**: 1 project

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd engineering-resource-management
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Seed the database**
   \`\`\`bash
   npm run seed
   \`\`\`

4. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Accounts

#### Manager Access
- **Email**: `manager@company.com`
- **Password**: `demo123`
- **Role**: Manager
- **Access**: Full system access, can assign engineers to projects

#### Engineer Access  
- **Email**: `engineer@company.com`
- **Password**: `demo123`
- **Role**: Engineer
- **Access**: View personal assignments and project details

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard layouts and pages
│   ├── engineers/         # Engineer management pages
│   ├── projects/          # Project management pages
│   ├── assignments/       # Assignment management pages
│   ├── my-assignments/    # Engineer's personal assignments
│   └── login/             # Authentication pages
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui base components
│   └── ...               # Custom application components
├── lib/                  # Utility functions and configurations
│   ├── seed-data.ts      # Database seed data and types
│   ├── mock-api.ts       # Mock API functions
│   ├── auth-provider.tsx # Authentication context
│   └── utils.ts          # Utility functions
└── scripts/              # Database and utility scripts
    └── seed.ts           # Database seeding script
\`\`\`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data
- `npm run seed:dev` - Seed database in development mode
- `npm run seed:prod` - Seed database in production mode

## 🎯 Key Features Implemented

### ✅ Core Requirements
- [x] Authentication with Manager and Engineer roles
- [x] Engineer profiles with skills and capacity tracking
- [x] Project management with required skills
- [x] Assignment system with allocation percentages
- [x] Role-based dashboards and navigation
- [x] Capacity calculation and visualization
- [x] Search and filtering capabilities

### ✅ Advanced Features
- [x] Overallocation detection and warnings
- [x] Skills distribution analytics
- [x] Project progress tracking
- [x] Upcoming availability planning
- [x] Responsive design for all screen sizes
- [x] Dark/light theme support
- [x] Comprehensive seed data with realistic scenarios

## 🔮 Future Enhancements

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] Server-side authentication with NextAuth.js
- [ ] Real-time notifications for assignment changes
- [ ] Calendar view for assignment timelines
- [ ] Advanced analytics and reporting
- [ ] Email notifications for managers and engineers
- [ ] File upload for engineer profiles
- [ ] Advanced search with multiple filters
- [ ] Export functionality for reports
- [ ] Integration with external HR systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the icon set
- [Recharts](https://recharts.org/) for data visualization
- [Next.js](https://nextjs.org/) for the amazing React framework
