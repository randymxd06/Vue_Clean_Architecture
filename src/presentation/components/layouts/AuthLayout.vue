<script lang="ts" setup>
/**====================
 * AUTH LAYOUT PROPS
=======================*/
interface Props {
    reverse: boolean
}

/**============================
 * AUTH LAYOUT DEFAULT PROPS
===============================*/
withDefaults(defineProps<Props>(), {
    reverse: false,
})
</script>

<template>

    <!--==============
        AUTH LAYOUT
    ==================-->
    <main class="min-h-screen flex flex-col md:flex-row bg-blue-600" :class="{ 'md:flex-row-reverse': reverse }">

        <!--================== 
            WELCOME MESSAGE
        ======================-->
        <section class="w-full md:w-1/2 text-white flex items-center justify-center flex-col px-6 py-16">

            <!--==================
                WELCOME MESSAGE
            ======================-->
            <article class="text-center">
                <h1 class="text-2xl md:text-4xl font-bold mb-2">Welcome to YourApp</h1>
                <p class="text-sm md:text-lg">We made it for you</p>
            </article>

        </section>

        <!--============
            AUTH FORM
        ================-->
        <section
            class="w-full md:w-1/2 flex items-center justify-center p-6 bg-white shadow-md rounded-t-[1.5rem] md:rounded-l-[1.5rem] md:rounded-tr-none flex-grow h-full md:h-auto"
            :class="{ 'md:rounded-l-none! md:rounded-r-[1.5rem]!': reverse }">

            <!--==============
                ROUTER VIEW
            ==================-->
            <article class="w-full max-w-md">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </article>

        </section>

    </main>

</template>

<style scoped>
/*====================
    FADE TRANSITION
======================*/
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>