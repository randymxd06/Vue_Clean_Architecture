import { createRouter, createWebHistory } from "vue-router"
import AppLayout from "../components/layouts/AppLayout.vue"
import AuthLayout from "../components/layouts/AuthLayout.vue"
import LoginView from "../modules/auth/pages/LoginView.vue"
import RegisterView from "../modules/auth/pages/RegisterView.vue"
import ProductsView from "../modules/products/pages/ProductsView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: { name: "products" },
        },
        {
            path: "/auth",
            component: AuthLayout,
            children: [
                {
                    path: "login",
                    name: "login",
                    component: LoginView,
                },
                {
                    path: "register",
                    name: "register",
                    component: RegisterView,
                },
            ],
        },
        {
            path: "/",
            component: AppLayout,
            children: [
                {
                    path: "products",
                    name: "products",
                    component: ProductsView,
                },
            ],
        },
    ],
})

export default router
