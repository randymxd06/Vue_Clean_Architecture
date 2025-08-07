import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import LoginView from "../modules/auth/pages/LoginView.vue";
import RegisterView from "../modules/auth/pages/RegisterView.vue";
import ProductsView from "../modules/products/pages/ProductsView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/auth",
			component: AuthLayout,
			children: [
				{
					path: "login",
					name: "Login",
					component: LoginView,
				},
				{
					path: "register",
					name: "Register",
					component: RegisterView,
				},
			],
		},
		{
			path: "/",
			name: "products",
			component: ProductsView,
		},
	],
});

export default router;
