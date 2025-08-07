<script lang="ts" setup>

</script>

<template>
    <div class="w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6">Iniciar Sesión</h1>
        <form class="space-y-4">
            <input type="email" placeholder="Email" class="w-full p-3 border rounded" />
            <input type="password" placeholder="Contraseña" class="w-full p-3 border rounded" />
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                Entrar
            </button>
        </form>
        <p class="mt-4 text-sm">
            ¿No tienes cuenta?
            <RouterLink to="/auth/register" class="text-blue-600 hover:underline">Regístrate</RouterLink>
        </p>
    </div>
</template>