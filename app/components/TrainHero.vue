<template>
  <section class="w-full px-4 pb-24">
    <div class="relative mx-auto w-full max-w-[1420px]">
      <NuxtImg
        src="/img/hero/Futuristic City Highway and Blue Train.png"
        alt="Ghasemi Airlines"
        width="1420"
        height="320"
        class="w-full rounded-2xl"
      />

      <div
        class="absolute left-4 right-4 top-full z-10 mx-auto w-auto max-w-6xl -translate-y-4 sm:left-8 sm:right-8"
      >
        <div
          class="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl md:p-7"
          dir="rtl"
        >
          <div class="mb-5 flex items-center gap-3 items-center justify-center">
            <NuxtLink 
              class="flex flex-col items-center gap-3 rounded-lg px-5 py-2.5  text-sm font-semibold text-gray-600 transition w-xs cursor-pointer hover:text-blue-700"
              to="/"
              >
            <Icon name="lucide:plane" size="25" />
             <span>
               پرواز داخلی
             </span>
          </NuxtLink>
            <NuxtLink
              class="flex flex-col items-center gap-3 bg-white text-blue-700 border-b-3 px-5 py-2.5 text-sm font-semibold transition w-xs cursor-pointer"
               to="/train-ticket"
              >
            <Icon name="lucide:train" size="25" />
             <span>
               قطار
             </span>
          </NuxtLink>
            <NuxtLink
              class="flex flex-col items-center gap-3 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:text-blue-700 w-xs cursor-pointer"
              to="/bus-ticket"
              >
            <Icon name="lucide:bus" size="25" />
             <span>
               اتوبوس
             </span>
          </NuxtLink>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label class="flex min-w-0 flex-col gap-2">
              <span class="text-sm font-medium text-gray-600">مبدأ</span>
              <input
                type="text"
                placeholder="شهر مبدأ"
                class="h-12 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label class="flex min-w-0 flex-col gap-2">
              <span class="text-sm font-medium text-gray-600">مقصد</span>
              <input
                type="text"
                placeholder="شهر مقصد"
                class="h-12 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label class="flex min-w-0 flex-col gap-2">
              <span class="text-sm font-medium text-gray-600">تاریخ رفت</span>
              <input
                type="date"
                class="h-12 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-600 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <div class="flex flex-col justify-end">
              <button
                type="button"
                class="flex h-12 w-full items-center justify-center gap-2 rounded-lg cursor-pointer bg-blue-700 px-4 font-semibold text-white transition hover:bg-blue-800"
              >
                <Icon name="lucide:search" size="19" />
                جست‌وجوی پرواز
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
