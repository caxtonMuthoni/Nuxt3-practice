<template>
    <div class="card text-center">
        <img :src="product.image" :alt="product.title" class="thumb">
        <p class="font-bold truncate text-gray-500 m-4">{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`" class="btn">
            View details
        </nuxt-link>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>