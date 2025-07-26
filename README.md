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
├── domain/                             # Domain Layer (Core Business Logic)
│   ├── entities/                       # Business entities (e.g., User.ts, Product.ts)
│   │   └── Todo.ts                     # Defines Todo structure (id, title, completed, etc.)
│   ├── repositories/                   # Repository interfaces (abstractions)
│   │   └── TodoRepository.ts           # Defines CRUD operations for todos (create, read, update, delete)
│   └── use-cases/                      # Application use cases
│       └── todos/                      # Todos use cases
│            ├── CreateTodo.ts          # Manages todo creatation logic
│            ├── DeleteTodo.ts          # Manages all deletion logic.
│            ├── GetTodoById.ts         # Manages all the logic of obtaining by ID
│            ├── GetTodos.ts            # Manages all the logic of obtaining all records
│            └── UpdateTodo.ts          # Manages todo updates
│
├── infrastructure/                     # Infrastructure Layer (implementation details)
│   ├── api/                            # API communication
│   │   ├── AxiosClient.ts              # Axios HTTP client setup
│   │   └── HttpClient.ts               # Interface for all HTTP methods
│   ├── repositories/                   # Concrete repository implementations
│   │   ├── index.ts                    # Implements dependency injections for pinia stores
│   │   └── TodoRepositoryImpl.ts       # Implements TodoRepository using API client
│   ├── storage/                        # Client-side storage
│   │   └── LocalStorage.ts             # Example: LocalStorage wrapper
│   └── plugins/                        # Vue plugins
│       └── i18n.ts                     # Example: Internationalization plugin
│
├── presentation/                       # Presentation Layer (UI)
│   ├── components/                     # Reusable UI components
│   │   ├── ui/                         # Base UI components (buttons, inputs)
│   │   │   ├── TodoInput.vue           # Input field for new todos
│   │   │   ├── TodoItem.vue            # Single todo item display
│   │   │   └── TodoList.vue            # List of todos
│   │   └── shared/                     # App-specific shared components
│   │       └── TodoFilter.vue          # Filtering controls
│   ├── modules/                        # Feature modules
│   │   ├── todo/                       # Todo module
│   │   │   ├── pages/                  # Route-level components
│   │   │   │   └── TodoPage.vue        # Main todo page
│   │   │   ├── stores/                 # Todo stores
│   │   │   │   └── todoStore.ts        # Pinia store for todo state
│   │   │   ├── router/
│   │   │   │   └── index.ts            # Router configuration
│   │   │   ├── composables/            # Todo composables
│   │   │   ├── assets/
│   │   │   │   ├── styles/             # CSS/Styles
│   │   │   │   │   └── todo.css        # Todo-specific styles
│   │   │   │   └── icons/              # SVG/icons
│   │   │   └── components/             # Module-specific components
│   │   │       └── LoginForm.vue
│   │   ├── dashboard/                  # Another feature module
│   │   └── auth/                       # Another feature module
│   ├── stores/                         # State management
│   │   └── themeStore.ts               # Example: Pinia store for themes
│   ├── composables/                    # Composition API utilities
│   │   └── useTodo.ts                  # Example: Todo-related composable
│   ├── router/                         # Routing configuration
│   │   └── index.ts                    # Router setup with routes
│   ├── assets/                         # Global assets
│   │   ├── styles/                     # Global styles
│   │   │   └── main.css                # Global main styles
│   │   └── images/                     # Global images
│   └── App.vue                         # Root Vue component
│
├── shared/                             # Shared utilities and types
│   ├── utils/                          # Utility functions
│   │   ├── formValidator.ts            # Example: Validation utilities
│   │   └── dateFormatter.ts            # Date formatting utils
│   ├── constants/                      # Application constants
│   │   └── todo.ts                     # Todo-related constants (filter types, etc.)
│   └── types/                          # Global TypeScript types
│       └── todo.d.ts                   # Todo-related TypeScript types
│
└── main.ts                             # Application entry point (Vue initialization)
```
