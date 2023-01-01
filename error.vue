<template>
    <div class="mt-7 card mx-auto max-w-sm text-center">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oops!</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn mt-7" @click="clearTheError">Go Home</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const clearTheError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>