<script lang="ts" setup>
const onSubmit = () => {
    console.log("Register form submitted")
}
</script>

<template>
    <main>

        <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">Welcome</h1>
        <p class="text-center text-gray-500 mb-6">Create your account</p>

        <form @submit.prevent.stop="onSubmit" class="space-y-4">
            <input type="text" placeholder="Name"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
                Sign Up
            </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <RouterLink to="/auth/login" class="text-blue-600 hover:underline">Log in</RouterLink>
        </p>

    </main>
</template>
