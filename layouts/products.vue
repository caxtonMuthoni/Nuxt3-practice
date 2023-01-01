<template>
    <div>
        <header class="p-4 shadow-sm flex">
            <nuxt-link to="/products" class="font-bold">Nuxt Dojo merch</nuxt-link>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="">
            <nav class="container mx-auto p-4 shadow-sm flex">
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">about</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #05ad75;
}
</style>