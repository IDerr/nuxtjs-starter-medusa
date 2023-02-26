<template>
    <div class="sticky top-0 inset-x-0 z-50 group">
      <header class= "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200">
        <nav class="text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200">
          <div class="flex-1 basis-0 h-full flex items-center">
            <div class="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div class="hidden small:block h-full">
              <DropdownMenu />
            </div>
          </div>

          <div class="flex items-center h-full">
            <NuxtLink to="/">
              <a class="text-xl-semi uppercase">Acme</a>
            </NuxtLink>
          </div>

          <div class="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div class="hidden small:flex items-center gap-x-6 h-full">
              <!-- {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />} -->
              <NuxtLink href="/account">
                <a>Account</a>
              </NuxtLink>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
</template>