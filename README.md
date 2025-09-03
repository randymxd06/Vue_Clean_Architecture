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

## Directory Structure with Clean Architecture Proposal

```sh
src/
│
├── domain/                                 # Domain Layer (Core Business Logic)
│   ├── entities/                           # Business entities (e.g., User.ts, Product.ts)
│   │   └── products/                       # Product-related entities
│   │       └── Product.ts                  # Defines Product structure (id, name, price, stock, etc.)
│   ├── repositories/                       # Repository interfaces (abstractions)
│   │   └── products/                       # Product-related repository interfaces
│   │       └── ProductRepository.ts        # Defines CRUD operations for products (create, read, update, delete)
│   └── usecases/                           # Application use cases
│       └── products/                       # Products use cases
│            ├── CreateProduct.ts           # Manages product creatation logic
│            ├── DeleteProduct.ts           # Manages all deletion logic.
│            ├── GetProductById.ts          # Manages all the logic of obtaining by ID
│            ├── GetProducts.ts             # Manages all the logic of obtaining all records
│            └── UpdateProduct.ts           # Manages product updates
│
├── infrastructure/                         # Infrastructure Layer (implementation details)
│   ├── api/                                # API communication
│   │   ├── AxiosClient.ts                  # Axios HTTP client setup
│   │   └── HttpClient.ts                   # Interface for all HTTP methods
│   ├── repositories/                       # Concrete repository implementations
│   │   └── products/                       # Product-related repository implementations
│   │       ├── index.ts                    # Implements dependency injections for pinia stores
│   │       └── ProductRepositoryImpl.ts    # Implements ProductRepository using API client
│   ├── storage/                            # Client-side storage
│   │   └── LocalStorage.ts                 # Example: LocalStorage wrapper
│   └── plugins/                            # Vue plugins
│       └── i18n.ts                         # Example: Internationalization plugin
│
├── presentation/                           # Presentation Layer (UI)
│   ├── components/                         # Reusable UI components
│   │   ├── ui/                             # Base UI components (buttons, inputs)
│   │   │   ├── ProductInput.vue            # Input field for new products
│   │   │   ├── ProductItem.vue             # Single product item display
│   │   │   └── ProductList.vue             # List of products
│   │   └── shared/                         # App-specific shared components
│   │       └── ProductFilter.vue           # Filtering controls
│   ├── modules/                            # Feature modules
│   │   ├── product/                        # Product module
│   │   │   ├── pages/                      # Route-level components
│   │   │   │   └── ProductPage.vue         # Main product page
│   │   │   ├── stores/                     # Product stores
│   │   │   │   └── productStore.ts         # Pinia store for product state
│   │   │   ├── router/
│   │   │   │   └── index.ts                # Router configuration
│   │   │   ├── composables/                # Product composables
│   │   │   ├── assets/
│   │   │   │   ├── styles/                 # CSS/Styles
│   │   │   │   │   └── product.css         # Product-specific styles
│   │   │   │   └── icons/                  # SVG/icons
│   │   │   └── components/                 # Module-specific components
│   │   │       └── LoginForm.vue
│   │   ├── dashboard/                      # Another feature module
│   │   └── auth/                           # Another feature module
│   ├── stores/                             # State management
│   │   └── themeStore.ts                   # Example: Pinia store for themes
│   ├── composables/                        # Composition API utilities
│   │   └── useProduct.ts                   # Example: Product-related composable
│   ├── router/                             # Routing configuration
│   │   └── index.ts                        # Router setup with routes
│   ├── assets/                             # Global assets
│   │   ├── styles/                         # Global styles
│   │   │   └── main.css                    # Global main styles
│   │   └── images/                         # Global images
│   └── App.vue                             # Root Vue component
│
├── shared/                                 # Shared utilities and types
│   ├── utils/                              # Utility functions
│   │   ├── formValidator.ts                # Example: Validation utilities
│   │   └── dateFormatter.ts                # Date formatting utils
│   ├── constants/                          # Application constants
│   │   └── product.ts                      # Product-related constants (filter types, etc.)
│   └── types/                              # Global TypeScript types
│       └── product.d.ts                    # Product-related TypeScript types
│
└── main.ts                                 # Application entry point (Vue initialization)
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
