<template>
  <NuxtLayout>
    <Hero />
    <FeaturedProducts />
  </NuxtLayout>
</template>

<script setup ts>
useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.' }
    ]
})
</script>