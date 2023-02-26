<template>
    <div className="bg-amber-100 w-full">
        <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
            <div>
                <h3 className="text-2xl-semi">Shop the latest styles</h3>
                <div className="mt-6">
                <UnderlineLink href="/store">Explore products</UnderlineLink>
                </div>
            </div>

            <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
                <NuxtImg
                src="/cta_three.jpg"
                alt=""
                layout="fill"
                fit="cover"
                class="absolute inset-0"
                />
            </div>
        </div>
    </div>
</template>