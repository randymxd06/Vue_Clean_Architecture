<template>
    <main class="min-h-screen flex bg-gradient-to-br from-blue-500 to-blue-700">

        <section class="hidden md:flex md:w-1/2 items-center justify-center">
            <div class="text-white text-center px-6">
                <h1 class="text-4xl font-bold mb-4">Welcome to BLUEBACK</h1>
                <p class="text-lg">We made it for you</p>
            </div>
        </section>

        <section class="w-full md:w-1/2 bg-white md:rounded-l-3xl shadow-lg p-8 flex items-center justify-center">
            <router-view />
        </section>

    </main>
</template>
