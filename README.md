# Vue Clean Architecture

This is a Vue.js project in which I am putting into practice the principles and best practices of “Clean Architecture” by applying various design patterns such as the Dependency Inversion Principle (DIP) from the Solid principles, the Singleton pattern, the Repository pattern, among other design patterns. I have created a simple application to handle authentication and route authorization, but applying Clean Architecture with the aim of being able to use it as an example in future projects that will be done with this software architecture.

> [!IMPORTANT]
>
> ## Why use Clean Architecture in Frontend?
>
> Clean Architecture in Frontend, as with VueJS, organizes code into independent layers (domain, application, and infrastructure) to separate business logic from the interface and external dependencies. This allows Vue components to focus solely on presentation, delegating logic to services or use cases, which facilitates maintenance, testing, and future technology migrations. Although it may add initial complexity, it is especially useful in medium to large projects, where scalability and code clarity are priorities.
>
> The key is that internal layers (such as business rules) do not depend on external frameworks or libraries, making the core of the application more stable and reusable. This not only improves testability but also reduces risk when changing technologies, as the core logic remains intact. In summary, Clean Architecture offers a structured approach to building more robust and adaptable frontend applications, although it requires discipline in its implementation.

> [!TIP]
>
> ## Explanation of How to Implement Clean Architecture in the Frontend
>
> <img width="960" height="540" alt="frontend-clean-architecture-paquetes" src="https://github.com/user-attachments/assets/527f2603-31ec-4e1a-a3f2-bca71bdf1357" />
>
> The image shows how to apply Clean Architecture in the frontend using frameworks such as React or Vue, maintaining a clear separation of responsibilities. The structure is divided into three main layers (Presentation, Domain, and Data/Infrastructure), all contained in a core called CORE, independent of the framework used.
>
> In the View layer, React or Vue consume states managed by the Presentation layer, using patterns such as BLoC (or Hooks in React and Composables in Vue) to separate the logic from the components. BLoC acts as an intermediary: it receives events from the view, processes the logic, and emits new states, keeping the interface decoupled from the business.
>
> The domain layer contains the core logic of the application through use cases, which interact with entities (pure business models) and access data through abstract interfaces. This allows the data source to be changed without affecting the logic.
>
> Finally, the data/infrastructure layer implements those interfaces, connecting to APIs or other external sources. It transforms raw data and delivers it to the domain in a usable format.
>
> The flow is cyclical: the view triggers events, the BLoC executes use cases, the domain obtains data from the repository, and the API responds, updating the status reflected by the view. This ensures a maintainable, scalable, and framework-agnostic architecture, with the business core completely isolated.

## Current Project Structure

```sh
src/                                            # Source code
├── domain/                                     # Domain Layer (Core Business Logic)
│   ├── entities/                               # Business entities
│   │   └── products/                           # Product-related entities
│   │       └── Product.ts                      # Product entity definition
│   ├── repositories/                           # Repository interfaces (abstractions)
│   │   └── products/                           # Product repository interfaces
│   │       └── ProductRepository.ts            # Product repository contract
│   └── usecases/                               # Application use cases
│       └── products/                           # Product use cases
│           ├── CreateProduct.ts                # Create product use case
│           ├── DeleteProduct.ts                # Delete product use case
│           ├── GetProductById.ts               # Get product by ID use case
│           ├── GetProducts.ts                  # Get all products use case
│           ├── UpdateProduct.ts                # Update product use case
│           └── tests/                          # Use case tests
│               ├── CreateProduct.test.ts
│               ├── DeleteProduct.test.ts
│               ├── GetProductById.test.ts
│               ├── GetProducts.test.ts
│               └── UpdateProduct.test.ts
│
├── infrastructure/                             # Infrastructure Layer
│   ├── api/                                    # API communication
│   │   ├── AxiosClient.ts                      # Axios HTTP client setup
│   │   └── HttpClient.ts                       # HTTP client interface
│   ├── plugins/                                # Vue plugins
│   │   ├── animxyz.ts                          # AnimXYZ plugin configuration
│   │   ├── index.ts                            # Plugins entry point
│   │   ├── pinia.ts                            # Pinia store plugin
│   │   ├── vue-router.ts                       # Vue Router plugin
│   │   └── tests/                              # Plugin tests
│   │       ├── animxyz.test.ts
│   │       ├── index.test.ts
│   │       ├── pinia.test.ts
│   │       └── vue-router.test.ts
│   └── repositories/                           # Repository implementations
│       └── products/                           # Product repository implementations
│           ├── index.ts                        # Dependency injection setup
│           └── ProductRepositoryImpl.ts        # Product repository implementation
│
├── presentation/                               # Presentation Layer (UI)
│   ├── App.vue                                 # Root Vue component
│   ├── assets/                                 # Presentation assets
│   │   └── css/                                # Stylesheets
│   │       ├── main.css                        # Main styles
│   │       └── themes.css                      # Theme styles
│   ├── components/                             # UI Components (Atomic Design)
│   │   ├── index.ts                            # Components barrel export
│   │   ├── atoms/                              # Basic UI elements
│   │   │   ├── Avatar.vue
│   │   │   ├── Badge.vue
│   │   │   ├── Button.vue
│   │   │   ├── Icon.vue
│   │   │   ├── Logo.vue
│   │   │   ├── NotificationBadge.vue
│   │   │   └── tests/                          # Atom component tests
│   │   │       ├── Avatar.test.ts
│   │   │       ├── Badge.test.ts
│   │   │       ├── Button.test.ts
│   │   │       ├── Icon.test.ts
│   │   │       ├── Logo.test.ts
│   │   │       └── NotificationBadge.test.ts
│   │   ├── layouts/                            # Layout components
│   │   │   ├── AppLayout.vue                   # Main application layout
│   │   │   └── AuthLayout.vue                  # Authentication layout
│   │   ├── molecules/                          # Composite UI elements
│   │   │   ├── AppBrand.vue
│   │   │   ├── Breadcrumb.vue
│   │   │   ├── NavigationItem.vue
│   │   │   ├── SectionHeader.vue
│   │   │   ├── SidebarToggle.vue
│   │   │   ├── ThemeSelector.vue
│   │   │   ├── TopbarActions.vue
│   │   │   ├── UserProfile.vue
│   │   │   └── tests/                          # Molecule component tests
│   │   │       ├── AppBrand.test.ts
│   │   │       ├── Breadcrumb.test.ts
│   │   │       ├── NavigationItem.test.ts
│   │   │       ├── SectionHeader.test.ts
│   │   │       ├── SidebarToggle.test.ts
│   │   │       ├── ThemeSelector.test.ts
│   │   │       ├── TopbarActions.test.ts
│   │   │       └── UserProfile.test.ts
│   │   └── organisms/                          # Complex UI sections
│   │       ├── NavigationSection.vue
│   │       ├── Sidebar.vue
│   │       ├── SidebarFooter.vue
│   │       ├── SidebarHeader.vue
│   │       └── Topbar.vue
│   ├── composables/                            # Vue Composition API utilities
│   │   └── useSidebar.ts                       # Sidebar state management
│   ├── modules/                                # Feature modules
│   │   ├── auth/                               # Authentication module
│   │   │   └── pages/                          # Auth pages
│   │   │       ├── LoginView.vue               # Login page
│   │   │       └── RegisterView.vue            # Registration page
│   │   └── products/                           # Products module
│   │       ├── pages/                          # Product pages
│   │       │   └── ProductsView.vue            # Products view page
│   │       └── stores/                         # Product stores
│   │           └── productStore.ts             # Product state management
│   ├── router/                                 # Routing configuration
│   │   └── index.ts                            # Router setup
│   ├── stores/                                 # Global state management
│   │   └── themeStore.ts                       # Theme state management
│   ├── stories/                                # Storybook stories
│   │   ├── atoms/                              # Atom component stories
│   │   │   ├── Avatar.stories.ts
│   │   │   ├── Badge.stories.ts
│   │   │   ├── Button.stories.ts
│   │   │   ├── Icon.stories.ts
│   │   │   ├── Logo.stories.ts
│   │   │   └── NotificationBadge.stories.ts
│   │   └── molecules/                          # Molecule component stories
│   │       ├── AppBrand.stories.ts
│   │       ├── Breadcrumb.stories.ts
│   │       ├── NavigationItem.stories.ts
│   │       ├── SectionHeader.stories.ts
│   │       ├── SidebarToggle.stories.ts
│   │       ├── ThemeSelector.stories.ts
│   │       ├── TopbarActions.stories.ts
│   │       └── UserProfile.stories.ts
│   └── types/                                  # TypeScript type definitions
│       └── theme.ts                            # Theme-related types
│
└── main.ts                                     # Application entry point
```

## Project Setup

### 1 - Install the necessary dependencies to run the project

```sh
npm install
```

### 2 - Clone the `.env.template` file and rename it to `.env` then enter the values corresponding to the environment variables so that the project can run smoothly.

```env
VITE_API_BASE_URL=''
```

### 3 - Run the project in development mode to perform a hot reload.

```sh
npm run dev
```

---

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Generate Coverage Report

```sh
npm run test:coverage
```

### Generate Coverage Report with Watch Mode

```sh
npm run test:coverage:watch
```

### Generate Coverage Report and Open in Browser

```sh
npm run test:coverage:open
```

> [!NOTE]
> The coverage reports are generated in the `coverage/` directory with multiple formats:
> - **HTML Report**: `coverage/index.html` - Interactive web interface
> - **Text Report**: Displayed in terminal during execution
> - **LCOV Report**: `coverage/lcov.info` - For CI/CD integration
> - **JSON Report**: `coverage/coverage-final.json` - Machine-readable format
