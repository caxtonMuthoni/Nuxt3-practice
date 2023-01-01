<template>
    <div>
        <h1>Products</h1>
       
        <div class="grid grid-cols-4 gap-4">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
 definePageMeta({
    layout: "products"
 })

 const { data: products } = await useFetch('https://fakestoreapi.com/products')

 useHead({
    title: "Our products",
    meta: [
        {
            name: "description",
            content: "Our list of products"
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>