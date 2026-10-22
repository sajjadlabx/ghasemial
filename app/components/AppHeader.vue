<script setup>

</script>

<template>
  <header
    class="relative z-40 h-16 w-full border-b border-gray-200 bg-white shadow-sm"
  >
    <nav class="mx-auto flex h-full w-full items-center justify-between px-6" dir="rtl">
      <div class="flex h-full items-center gap-7">
        <NuxtLink to="/" class="flex shrink-0 items-center">
            <NuxtImg
                src="/img/gal_logo.jpg"
                alt="Ghasemi Airlines"
                width="220"
                height="60"
                class="h-10 w-auto object-contain"
            />
        </NuxtLink>

        <div class="flex h-full items-center gap-4 whitespace-nowrap">
          <NuxtLink
            to="/flights"
            class="flex items-center gap-1 text-md text-gray-600 transition hover:text-blue-700"
          >
            بلیط هواپیما
            <Icon name="lucide:chevron-down" size="16" />
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/train"
            class="text-md text-gray-600 transition hover:text-blue-700"
          >
            بلیط قطار
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/bus"
            class="text-md text-gray-600 transition hover:text-blue-700"
          >
            بلیط اتوبوس
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/stay"
            class="flex items-center gap-1 text-md text-gray-600 transition hover:text-blue-700"
          >
            اقامت
            <Icon name="lucide:chevron-down" size="16" />
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/tours"
            class="text-md text-gray-600 transition hover:text-blue-700"
          >
            تور
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/visa"
            class="text-md text-gray-600 transition hover:text-blue-700"
          >
            ویزا
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/agency"
            class="text-md text-gray-600 transition hover:text-blue-700"
          >
            پنل آژانسی
          </NuxtLink>

          <div class="h-5 w-px shrink-0 bg-gray-200"></div>

          <NuxtLink
            to="/more"
            class="flex items-center gap-1 text-md text-gray-600 transition hover:text-blue-700"
          >
            بیشتر
            <Icon name="lucide:chevron-down" size="16" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex h-full shrink-0 items-center gap-2 whitespace-nowrap">
        <NuxtLink
          to="/support"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-700"
        >
          <Icon name="lucide:circle-help" size="20" />
          <span>پشتیبانی</span>
        </NuxtLink>

        <NuxtLink
          to="/my-trips"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-700"
        >
          <Icon name="lucide:luggage" size="20" />
          <span>سفرهای من</span>
        </NuxtLink>

        <NuxtLink
          to="/login"
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-blue-700"
        >
          <Icon name="lucide:user-round" size="20" />
          <span>ورود یا ثبت‌نام</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
