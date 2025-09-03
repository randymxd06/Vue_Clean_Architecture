<script lang="ts" setup>
import { useRouter } from "vue-router"

/**=============
 * USE ROUTER
================*/
const router = useRouter()

/**=====================
 * ON SUBMIT FUNCTION
 * @returns {void}
========================*/
const onSubmit = (): void => {
    console.log("Login form submitted")

    /**========================================
   * NAVIGATE TO PRODUCTS PAGE AFTER LOGIN
  ===========================================*/
    router.push({ name: "products" })
}
</script>

<template>

  <!--===========
    LOGIN VIEW
  ===============-->
  <main>

    <!--================
      WELCOME MESSAGE
    ====================-->
    <section>
      <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">Welcome</h1>
      <p class="text-center text-gray-500 mb-6">Log in to your account to continue</p>
    </section>

    <!--===========
      LOGIN FORM
    ===============-->
    <form @submit.prevent.stop="onSubmit" class="space-y-4">

      <!--============
        EMAIL INPUT
      ================-->
      <input type="email" placeholder="Email"
        class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <!--===============
        PASSWORD INPUT
      ===================-->
      <input type="password" placeholder="Password"
        class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <!--=====================
        FORGOT PASSWORD LINK
      =========================-->
      <div class="text-right text-sm text-blue-600 hover:underline cursor-pointer">
        Forgot your password?
      </div>

      <!--==============
        SUBMIT BUTTON
      ==================-->
      <button type="submit"
        class="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition cursor-pointer">
        Log In
      </button>

    </form>

    <!--=============
      SIGN UP LINK
    =================-->
    <p class="mt-6 text-center text-sm text-gray-600">
      Don’t have an account?
      <RouterLink to="/auth/register" class="text-blue-600 hover:underline">Sign Up</RouterLink>
    </p>

  </main>

</template>