
<template>
  <section
    dir="rtl"
    class="a-card relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-white px-8 pt-2"
  >
    <div class="relative flex w-full flex-wrap items-center justify-center">
      <!-- QR Code -->
      <NuxtImg
        src="/img/qrcode-56155e39.png"
        alt="بارکد دانلود اپلیکیشن قاسمی ایرلاینز"
        width="148"
        height="185"
        class="ml-8 h-[185px] w-[148px] shrink-0 object-contain"
      />

      <!-- متن و لینک‌ها -->
      <div class="min-w-0 flex-1 whitespace-nowrap pl-8">
        <p class="mb-1 text-xl font-black text-gray-900">
          اپلیکیشن قاسمی ایرلاینز
        </p>

        <span class="text-base font-medium text-gray-700">
          سریع‌تر و مطمئن‌تر به سفر بروید
        </span>

        <div class="flex w-full items-stretch py-5">
          <NuxtLink
            to="/app"
            class="mr-2 inline-flex items-center py-2 pl-7 text-sky-600 transition hover:text-sky-700"
          >
            <span>مشاهده لینک‌های دانلود</span>
            <Icon name="lucide:chevron-left" size="20" class="mr-2" />
          </NuxtLink>
        </div>

        <!-- سیستم‌عامل‌های پشتیبانی‌شده -->
        <div class="flex items-end gap-2 text-sm text-gray-400">
          <Icon name="lucide:apple" size="20" />
          <Icon name="lucide:smartphone" size="20" />
          <span>قابلیت نصب روی Android و iOS</span>
        </div>
      </div>

      <!-- تصویر گوشی‌ها -->
      <NuxtImg
        src="/img/mobileapp.png"
        alt="پیش‌نمایش اپلیکیشن قاسمی ایرلاینز"
        width="334"
        height="294"
        class="h-[294px] w-[334px] shrink-0 self-end object-contain"
      />
    </div>
  </section>
</template>

<script setup>

</script>

<style>

</style>