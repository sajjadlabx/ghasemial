
<template>
  <footer class="bg-slate-50 text-gray-700" dir="rtl">
    <section class="border-b border-gray-200">
      <div class="mx-auto max-w-7xl px-4">
        <ul class="grid grid-cols-1 gap-6 py-8 md:grid-cols-3 md:gap-8">
          <li
            v-for="service in services"
            :key="service.title"
            class="flex items-center gap-4"
          >
            <img
              :src="service.image"
              :alt="service.title"
              width="89"
              height="89"
              loading="lazy"
              class="h-[89px] w-[89px] shrink-0 object-contain"
            />

            <div class="min-w-0">
              <h3 class="mb-2 text-base font-bold text-gray-800 md:text-lg">
                {{ service.title }}
              </h3>
              <p class="text-sm leading-7 text-gray-500">
                {{ service.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-gray-200">
      <div class="mx-auto max-w-7xl px-4 py-10">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <NuxtLink to="/" class="mb-5 inline-flex items-center gap-3">
              <img
                src="/img/gal_logo.jpg"
                alt="Ghasemi Airlines"
                width="150"
                height="50"
                loading="lazy"
                class="h-auto w-36 object-contain"
              />
            </NuxtLink>

            <h2 class="mb-3 text-lg font-bold text-slate-900">
              قاسمی ایرلاینز
            </h2>

            <p class="text-sm leading-8 text-gray-500">
              همراه شما در مسیر سفر؛ برای دسترسی آسان به اطلاعات پروازها،
              انتخاب مقصد و تجربه سفری مطمئن‌تر.
            </p>

            <div class="mt-5 flex items-center gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <Icon :name="social.icon" size="19" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="mb-5 text-base font-bold text-slate-900">
              دسترسی سریع
            </h3>

            <ul class="space-y-4 text-sm">
              <li v-for="link in quickLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="transition hover:text-blue-700"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-5 text-base font-bold text-slate-900">
              خدمات مسافران
            </h3>

            <ul class="space-y-4 text-sm">
              <li v-for="link in passengerLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="transition hover:text-blue-700"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-5 text-base font-bold text-slate-900">
              ارتباط با ما
            </h3>

            <ul class="space-y-5 text-sm">
              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:phone"
                  size="19"
                  class="mt-1 shrink-0 text-blue-700"
                />
                <div>
                  <p class="mb-1 font-semibold text-gray-800">تلفن تماس</p>
                  <a
                    href="tel:+982100000000"
                    dir="ltr"
                    class="text-gray-500 transition hover:text-blue-700"
                  >
                    021-00000000
                  </a>
                </div>
              </li>

              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:mail"
                  size="19"
                  class="mt-1 shrink-0 text-blue-700"
                />
                <div>
                  <p class="mb-1 font-semibold text-gray-800">ایمیل</p>
                  <a
                    href="mailto:info@example.com"
                    dir="ltr"
                    class="break-all text-gray-500 transition hover:text-blue-700"
                  >
                    info@example.com
                  </a>
                </div>
              </li>

              <li class="flex items-start gap-3">
                <Icon
                  name="lucide:map-pin"
                  size="19"
                  class="mt-1 shrink-0 text-blue-700"
                />
                <div>
                  <p class="mb-1 font-semibold text-gray-800">نشانی</p>
                  <p class="leading-7 text-gray-500">
                    نشانی دفتر مرکزی قاسمی ایرلاینز
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-xs text-gray-500 sm:flex-row sm:text-right"
      >
        <p>
           کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به قاسمی ایرلاینز می‌باشد. (نسخه 3.288.1) 
        </p>

        <div class="flex flex-wrap justify-center gap-5">
          <NuxtLink
            to="/privacy"
            class="transition hover:text-blue-700"
          >
            حریم خصوصی
          </NuxtLink>

          <NuxtLink
            to="/terms"
            class="transition hover:text-blue-700"
          >
            قوانین و مقررات
          </NuxtLink>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const services = [
  {
    title: 'همراه مطمئن سفر',
    description: 'تجربه‌ای آسان و مطمئن برای برنامه‌ریزی سفرهای هوایی',
    image: '/img/footer/laptopfooter.png',
  },
  {
    title: 'همسفر هر مقصد',
    description: 'دسترسی آسان به اطلاعات پروازها و مسیرهای سفر',
    image: '/img/footer/message.png',
  },
  {
    title: 'پشتیبانی در سفر',
    description: 'دریافت راهنمایی درباره رزرو و اطلاعات پرواز',
    image: '/img/footer/ticket.png',
  },
]

const quickLinks = [
  { label: 'صفحه اصلی', to: '/' },
  { label: 'درباره ما', to: '/about' },
  { label: 'مقاصد پروازی', to: '/destinations' },
  { label: 'سؤالات متداول', to: '/faq' },
]

const passengerLinks = [
  { label: 'جست‌وجوی پرواز', to: '/flights' },
  { label: 'راهنمای خرید بلیت', to: '/guide' },
  { label: 'اطلاعات و قوانین پرواز', to: '/flight-info' },
  { label: 'تماس با پشتیبانی', to: '/contact' },
]

const socials = [
  {
    label: 'اینستاگرام',
    icon: 'lucide:instagram',
    href: 'https://instagram.com/',
  },
  {
    label: 'تلگرام',
    icon: 'lucide:send',
    href: 'https://t.me/',
  },
  {
    label: 'ایمیل',
    icon: 'lucide:mail',
    href: 'mailto:info@example.com',
  },
]
</script>
