<script lang="ts" setup>

</script>

<template>
    <div class="w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6">Crear Cuenta</h1>
        <form class="space-y-4">
            <input type="text" placeholder="Nombre" class="w-full p-3 border rounded" />
            <input type="email" placeholder="Email" class="w-full p-3 border rounded" />
            <input type="password" placeholder="Contraseña" class="w-full p-3 border rounded" />
            <button type="submit" class="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                Registrarse
            </button>
        </form>
        <p class="mt-4 text-sm">
            ¿Ya tienes cuenta?
            <RouterLink to="/auth/login" class="text-green-600 hover:underline">Inicia sesión</RouterLink>
        </p>
    </div>
</template>
