<script lang="ts" setup>

</script>

<template>

    <main class="w-full max-w-md">

        <!--========
            TITLE
        ============-->
        <h1 class="text-2xl font-bold mb-6">
            Login
        </h1>

        <!--=======
            FORM
        ===========-->
        <form class="space-y-4">
            <input type="email" placeholder="Email" class="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" class="w-full p-3 border rounded" />
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                Log in
            </button>
        </form>

        <!--===============
            SIGN UP LINK
        ===================-->
        <p class="mt-4 text-sm">
            Don't have an account?
            <RouterLink to="/auth/register" class="text-blue-600 hover:underline">Sign up</RouterLink>
        </p>

    </main>

</template>