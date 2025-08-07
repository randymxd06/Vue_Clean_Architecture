<template>

    <main class="min-h-screen flex">

        <!--============
            FORM AREA
        ================-->
        <section class="w-full md:w-1/2 flex items-center justify-center p-8">
            <router-view />
        </section>

        <!--===============
            ILLUSTRATION
        ===================-->
        <section class="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100">
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?semt=ais_hybrid&w=740" alt="Auth Illustration" class="max-w-md w-full px-4" />
        </section>

    </main>

</template>
