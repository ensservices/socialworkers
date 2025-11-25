# RWA President Social Work Showcase

## Overview

A community leadership showcase website for an RWA (Resident Welfare Association) President. The platform highlights social initiatives, community events, and resident engagement through a modern, trust-building web experience. Built as a single-page application featuring impact metrics, initiative galleries, event timelines, testimonials, and a contact form for community members to connect.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast hot module replacement
- Single-page application (SPA) using Wouter for lightweight client-side routing
- Mobile-first responsive design approach

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library (New York style variant) with Tailwind CSS
- Custom CSS variables system for consistent theming across light/dark modes
- Typography system using Inter/Manrope fonts with systematic size scales

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- Local React state for UI interactions and form handling
- Custom toast notification system for user feedback

**Design System**
- Tailwind CSS utility-first styling with custom configuration
- Spacing primitives based on multiples of 4px units
- Responsive breakpoints: mobile-first, md (768px), lg (1024px+)
- Color system using HSL CSS variables for theme flexibility
- Component variants using class-variance-authority (CVA)

### Backend Architecture

**Server Framework**
- Express.js Node.js server with TypeScript
- Separate development (Vite middleware) and production (static serving) entry points
- Middleware for JSON parsing with raw body preservation
- Request/response logging with duration tracking

**API Design**
- RESTful API pattern with `/api` prefix
- Single contact form submission endpoint (`POST /api/contact`)
- Zod schema validation for request data
- Structured error responses with validation error formatting

**Development vs Production**
- Development: Vite dev server integration with HMR, runtime error overlay
- Production: Pre-built static assets served from `dist/public`
- Environment-based configuration switching

### Data Storage

**Database**
- PostgreSQL via Neon serverless driver with WebSocket support
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with TypeScript type inference

**Schema Design**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_submissions` table: Stores community contact form submissions (id, name, email, subject, message, created_at)
- UUID-based primary keys using PostgreSQL's gen_random_uuid()
- Timestamps for audit trails

**Data Access Layer**
- Storage abstraction interface (`IStorage`) for repository pattern
- `DbStorage` implementation handling database operations
- Drizzle-Zod integration for automatic validation schema generation from database schema

### Authentication & Authorization

**Current State**
- User schema exists but authentication not implemented
- No session management or authorization middleware
- Contact form submissions are publicly accessible (no auth required)

**Prepared for Future Implementation**
- User table ready for authentication addition
- Express session configuration can be added via connect-pg-simple

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting with WebSocket connections
- **Drizzle Kit**: Database migrations and schema management tooling

### UI & Design Libraries
- **Radix UI**: Complete suite of accessible React primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **Lucide React**: Icon library for consistent UI iconography
- **Embla Carousel**: Carousel/slider functionality

### Data Management
- **TanStack Query v5**: Async state management for API calls
- **React Hook Form**: Form state and validation management
- **Zod**: Runtime type validation and schema definition
- **date-fns**: Date manipulation and formatting utilities

### Development Tools
- **Vite**: Build tool with development server
- **TypeScript**: Type system for JavaScript
- **Replit Plugins**: Development banner, cartographer, and runtime error modal for Replit environment

### Build & Bundling
- **esbuild**: Server-side code bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Routing & Navigation
- **Wouter**: Lightweight client-side routing (~1.2KB)

### Fonts
- Google Fonts integration: Architects Daughter, DM Sans, Fira Code, Geist Mono (loaded via HTML)