<script>
export default {
	props: {
		reverse: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<template>
    <main class="min-h-screen flex flex-col md:flex-row bg-blue-600" :class="{ 'md:flex-row-reverse': reverse }">
        <section class="w-full md:w-1/2 text-white flex items-center justify-center flex-col px-6 py-16">
            <div class="text-center">
                <h1 class="text-2xl md:text-4xl font-bold mb-2">Welcome to YourApp</h1>
                <p class="text-sm md:text-lg">We made it for you</p>
            </div>
        </section>

        <section
            class="w-full md:w-1/2 flex items-center justify-center p-6 bg-white shadow-md rounded-t-[1.5rem] md:rounded-l-[1.5rem] md:rounded-tr-none flex-grow h-full md:h-auto"
            :class="{ 'md:rounded-l-none! md:rounded-r-[1.5rem]!': reverse }">
            <div class="w-full max-w-md">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </section>
    </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>