<template>
    <div class="h-[90vh] w-full relative">
        <div class="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
            <h1 class="text-2xl-semi mb-4 drop-shadow-md shadow-black">
                Summer styles are finally here
            </h1>
            <p class="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
                This year, our new summer collection will shelter you from the harsh
                elements of a world that doesn&apos;t care if you live or die.
            </p>
            <NuxtLink to="/store">Explore products</NuxtLink >
        </div>
        <NuxtImg
            src="/hero.jpg"
            fit="cover"
            loading="eager"
            quality=90
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            class="absolute inset-0"
            draggable="false"
        />
    </div>
</template>
<script setup ts>
</script>