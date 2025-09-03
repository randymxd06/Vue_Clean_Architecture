<script lang="ts" setup>
/**=====================
 * ON SUBMIT FUNCTION
 * @returns {void}
========================*/
const onSubmit = (): void => {
    console.log("Register form submitted")
}
</script>

<template>

    <!--================
        REGISTER VIEW
    ====================-->
    <main>

        <!--================
            WELCOME MESSAGE
        ====================-->
        <section>
            <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">Welcome</h1>
            <p class="text-center text-gray-500 mb-6">Create your account</p>
        </section>

        <!--================
            REGISTER FORM
        ====================-->
        <form @submit.prevent.stop="onSubmit" class="space-y-4">

            <!--=============
                NAME INPUT
            =================-->
            <input type="text" placeholder="Name"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <!--==============
                EMAIL INPUT
            ==================-->
            <input type="email" placeholder="Email"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <!--=================
                PASSWORD INPUT
            =====================-->
            <input type="password" placeholder="Password"
                class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <!--================
                SUBMIT BUTTON
            ====================-->
            <button type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
                Sign Up
            </button>

        </form>

        <!--==============
            LOG IN LINK
        ==================-->
        <p class="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <RouterLink to="/auth/login" class="text-blue-600 hover:underline">Log in</RouterLink>
        </p>

    </main>

</template>
