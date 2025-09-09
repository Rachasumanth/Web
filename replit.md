# Strawberry Studios - Company Website

## Overview

This is a modern company website for Strawberry Studios, a technology company focused on building human-centric AI solutions for education. The website showcases their flagship product CocoMam.app and serves as a platform for company information, product demonstrations, and client engagement. Built as a full-stack application with a React frontend and Express backend, it features a contact form system for lead generation and customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible design
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: TanStack Query for server state management and API caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with structured error handling and request logging
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Ready for PostgreSQL session storage with connect-pg-simple

### Data Storage Solutions
- **Current**: In-memory storage for development and testing
- **Prepared For**: PostgreSQL database with Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema versioning
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation

### Development & Build System
- **Monorepo Structure**: Shared schema and types between client and server
- **Development Server**: Vite development server with HMR integrated with Express
- **Production Build**: Optimized client build with Express server compilation via esbuild
- **Environment**: Configured for both local development and cloud deployment

### External Dependencies
- **Database**: Neon PostgreSQL (serverless) configured but not yet implemented
- **UI Components**: Radix UI primitives for accessibility and consistent behavior
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration for brand typography
- **Development Tools**: Replit-specific plugins for cloud development environment