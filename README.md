Simple demo : https://react-task-ts-main-52i6qe89v-hoang-van-cuongs-projects.vercel.app/

React Tasks Application - Overview

This project is a refactored React application designed with long-term maintainability, scalability, and robustness as first-class goals.
The main objective of this refactor is to transform the original codebase into a clean, well-structured, and future-proof architecture, suitable for continuous expansion over many years.
All architectural decisions prioritize clarity, separation of concerns, and predictable data flow.
The application is built using React + TypeScript + Vite, with a feature-oriented structure and modern best practices.


Key Design Principles
- Feature-first architecture for scalability
- Clear separation of concerns
- Explicit ownership of logic (UI vs domain vs infrastructure)
- Type safety end-to-end
- Minimal coupling, high cohesion
- Easy onboarding for new developers

Tech Stack: React 18, TypeScript, Vite, Zustand (state management), Axios (HTTP client), Tailwind CSS (UI styling), shadcn-inspired UI components


------------------------------------------------------------------------------------------------------------------------------

Folder Structure Explanation


```text
src/
├─ components/
│  └─ ui/
│     └─ Reusable, framework-agnostic UI components
│
├─ features/
│  ├─ product/
│  │  └─ Domain-specific logic related to products
│  └─ theme/
│     └─ Application theming and UI state
│
├─ https/
│  └─ axios.ts
│     └─ Centralized Axios instance with global configuration
│
├─ lib/
│  ├─ constant.ts
│  ├─ helpers.ts
│  └─ utils.ts
│     └─ Shared utilities and constants
│
├─ pages/
│  ├─ not-found/
│  │  └─ 404 handling (components, hooks, types isolated)
│  │
│  ├─ product/
│  │  └─ Product listing and creation page
│  │
│  └─ product-detail/
│     └─ Product detail page
│
├─ routes/
│  ├─ layouts/
│  │  └─ Application layout definitions
│  └─ index.tsx
│     └─ Centralized route configuration
│
├─ App.tsx
│  └─ Root application component
│
├─ providers.tsx
│  └─ Global providers (state, theme, etc.)
│
├─ main.tsx
│  └─ Application bootstrap
│
└─ global.css
   └─ Global styles

```
------------------------------------------------------------------------------------------------------------------------------


1. Feature-Based Organization
Instead of grouping code by technical type only (components, hooks, services), the application groups logic by business domain:
- features/product
- features/theme

This approach:
- Scales naturally as the app grows
- Keeps related logic close together
- Prevents massive shared folders over time

------------------------------------------------------------------------------------------------------------------------------

2. UI Components vs Domain Logic
- components/ui
→ Pure, reusable UI primitives with no business logic

- features/* and pages/*
→ Own all domain-specific behavior

This ensures UI components remain stable even as business rules evolve.

------------------------------------------------------------------------------------------------------------------------------

3. Centralized HTTP Layer
   ```src/https/axios.ts```

Single Axios instance
Global configuration
Easy to add: interceptors, authentication, logging, retries, error normalization
This avoids scattered API logic and makes backend changes safer.

------------------------------------------------------------------------------------------------------------------------------

4. Explicit Routing Layer
   ```src/routes/```

- Routes are declared in one place
- Layouts are reusable and composable
- Easy to introduce: protected routes, role-based access, lazy loading

------------------------------------------------------------------------------------------------------------------------------

5. Predictable State Management
Zustand is used intentionally for: Simplicity, Explicit state ownership, Minimal boilerplate
State logic is colocated with the feature it belongs to.

------------------------------------------------------------------------------------------------------------------------------

Maintainability & Long-Term Expansion
This architecture supports:
- Adding new features without touching existing ones
- Refactoring safely with strong TypeScript guarantees
- Onboarding new developers quickly
- Migrating to SSR or backend integration later
- Replacing UI libraries without rewriting business logic

------------------------------------------------------------------------------------------------------------------------------
