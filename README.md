# Vue Clean Architecture

This is a Vue.js project in which I am putting into practice the principles and best practices of “Clean Architecture” by applying various design patterns such as the Dependency Inversion Principle (DIP) from the Solid principles, the Singleton pattern, the Repository pattern, among other design patterns. I have created a simple application to handle authentication and route authorization, but applying Clean Architecture with the aim of being able to use it as an example in future projects that will be done with this software architecture.

## Why use Clean Architecture in Frontend?

Clean Architecture in Frontend, as with VueJS, organizes code into independent layers (domain, application, and infrastructure) to separate business logic from the interface and external dependencies. This allows Vue components to focus solely on presentation, delegating logic to services or use cases, which facilitates maintenance, testing, and future technology migrations. Although it may add initial complexity, it is especially useful in medium to large projects, where scalability and code clarity are priorities.

The key is that internal layers (such as business rules) do not depend on external frameworks or libraries, making the core of the application more stable and reusable. This not only improves testability but also reduces risk when changing technologies, as the core logic remains intact. In summary, Clean Architecture offers a structured approach to building more robust and adaptable frontend applications, although it requires discipline in its implementation.

## Clean Architecture In Frontend

<img width="960" height="540" alt="frontend-clean-architecture-paquetes" src="https://github.com/user-attachments/assets/527f2603-31ec-4e1a-a3f2-bca71bdf1357" />



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
