# vue-clean-architecture

This is a Vue project in which I am practicing Clean Architecture. To test it, I created a simple Todo List application. It still needs improvement, but it is now ready to be used as an example for future projects.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Directory Structure

```sh
src/
│
├── domain/                         # Domain Layer (Core Business Logic)
│   ├── entities/                   # Business entities (e.g., User.ts, Product.ts)
│   │   └── Todo.ts                 # Defines Todo structure (id, title, completed, etc.)
│   ├── repositories/               # Repository interfaces (abstractions)
│   │   └── TodoRepository.ts       # Defines CRUD operations for todos (create, read, update, delete)
│   ├── services/                   # Business logic services
│   │   └── TodoService.ts          # Orchestrates todo operations (validation, business rules)
│   └── use-cases/                  # Application use cases
│       ├── CreateTodo.ts           # Handles todo creation logic
│       ├── UpdateTodo.ts           # Manages todo updates
│       └── ToggleTodoComplete.ts   # Handles completion state changes
│
├── infrastructure/                 # Infrastructure Layer (implementation details)
│   ├── api/                        # API communication
│   │   └── axiosClient.ts          # Example: Axios HTTP client setup
│   │   └── todoApiClient.ts        # Specific API client for todos (using Axios/Fetch)
│   ├── repositories/               # Concrete repository implementations
│   │   └── TodoRepositoryImpl.ts   # Implements TodoRepository using API client
│   ├── storage/                    # Client-side storage
│   │   └── LocalStorage.ts         # Example: LocalStorage wrapper
│   ├── plugins/                    # Vue plugins
│   │   └── i18n.ts                 # Example: Internationalization plugin
│   └── services/                   # External services integration
│       └── TodoNotification.ts     # Handles UI notifications for todo operations
│
├── presentation/                   # Presentation Layer (UI)
│   ├── components/                 # Reusable UI components
│   │   ├── ui/                     # Base UI components (buttons, inputs)
│   │   │   ├── TodoInput.vue       # Input field for new todos
│   │   │   ├── TodoItem.vue        # Single todo item display
│   │   │   └── TodoList.vue        # List of todos
│   │   └── shared/                 # App-specific shared components
│   │       └── TodoFilter.vue      # Filtering controls
│   ├── modules/                    # Feature modules
│   │   ├── auth/                   # Authentication module
│   │   │   ├── pages/              # Route-level components
│   │   │   │   └── TodoPage.vue    # Main todo page
│   │   │   ├── stores/
│   │   │   │   └── useTodoStore.ts # Pinia store for todo state
│   │   │   ├── router/
│   │   │   │   └── index.ts        # Router configuration
│   │   │   ├── composables/
│   │   │   ├── assets/
│   │   │   │   ├── styles/         # CSS/Styles
│   │   │   │   │   └── todo.css    # Todo-specific styles
│   │   │   │   └── icons/          # SVG/icons
│   │   │   └── components/         # Module-specific components
│   │   │       └── LoginForm.vue
│   │   ├── dashboard/              # Another feature module
│   │   └── todo/                   # Another feature module
│   ├── stores/                     # State management
│   │   └── useAuthStore.ts         # Example: Pinia store for auth
│   ├── composables/                # Composition API utilities
│   │   └── useUser.ts              # Example: User-related composable
│   ├── router/                     # Routing configuration
│   │   └── index.ts                # Router setup with routes
│   ├── assets/                     # Global assets
│   │   ├── styles/                 # Global styles
│   │   └── images/                 # Global images
│   └── App.vue                     # Root Vue component
│
├── shared/                         # Shared utilities and types
│   ├── utils/                      # Utility functions
│   │   └── formValidator.ts        # Example: Validation utilities
│   │   └── dateFormatter.ts        # Date formatting utils
│   ├── constants/                  # Application constants
│   │   └── todo.ts                 # Todo-related constants (filter types, etc.)
│   └── types/                      # Global TypeScript types
│       └── todo.d.ts               # Todo-related TypeScript types
│
└── main.ts                         # Application entry point (Vue initialization)
```
