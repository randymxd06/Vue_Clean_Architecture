<script lang="ts" setup>

</script>

<template>

    <main class="w-full max-w-md">

        <!--========
            TITLE
        ============-->
        <h1 class="text-2xl font-bold mb-6">
            Create Account
        </h1>

        <!--=======
            FORM
        ===========-->
        <form class="space-y-4">
            <input type="text" placeholder="Name" class="w-full p-3 border rounded" />
            <input type="email" placeholder="Email" class="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" class="w-full p-3 border rounded" />
            <button type="submit" class="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition cursor-pointer">
                Sign up
            </button>
        </form>

        <!--=============
            LOGIN LINK
        =================-->
        <p class="mt-4 text-sm">
            Already have an account?
            <RouterLink to="/auth/login" class="text-green-600 hover:underline">Log in</RouterLink>
        </p>

    </main>

</template>
