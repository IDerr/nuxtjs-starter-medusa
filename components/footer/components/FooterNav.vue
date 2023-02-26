<template>
    <div class="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div class="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <NuxtLink href="/">
            <a class="text-xl-semi uppercase">Acme</a>
          </NuxtLink>
        </div>
        <div class="text-small-regular grid grid-cols-2 gap-x-16">
          <div class="flex flex-col gap-y-2">
            <span class="text-base-semi">Collections</span>
            <ul class="grid grid-cols-1 gap-y-2" :class="[
                (collections?.length || 0) > 4 ? 'grid-cols-2' : ''
          ]">
                <li v-for="item in collections" key={c.id}>
                  <NuxtLink :to="'/collections/'+item.id">
                    <a>{item.title}</a>
                  </NuxtLink>
                </li>
            </ul>
          </div>
          <div class="flex flex-col gap-y-2">
            <span class="text-base-semi">Medusa</span>
            <ul class="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span class="text-xsmall-regular text-gray-500">
          © Copyright 2022 ACME
        </span>
        <div class="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
</template>
<script setup ts>
collections = []
</script>