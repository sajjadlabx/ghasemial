
<template>
  <section id="faq" dir="rtl" class="mx-auto px-4 py-10">
    <h2 class="mb-6 text-2xl font-extrabold text-gray-900">
      پرسش‌های شما
    </h2>

    <div class="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <details
        v-for="(item, index) in faqs"
        :key="index"
        class="group border-b border-gray-200 last:border-b-0"
      >
        <summary
          class="flex cursor-pointer list-none items-center gap-3 px-4 py-5 transition hover:bg-gray-50 md:px-6"
        >
          <Icon
            name="lucide:circle-help"
            size="28"
            class="shrink-0 text-sky-600"
          />

          <span class="flex-1 text-sm font-bold leading-7 text-gray-800 md:text-base">
            {{ item.question }}
          </span>

          <Icon
            name="lucide:chevron-down"
            size="20"
            class="shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>

        <div class="px-5 pb-5 pr-14 text-sm leading-8 text-gray-600 md:px-8 md:pr-16">
          {{ item.answer }}
        </div>
      </details>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: 'چند روز قبل از پرواز، بلیط هواپیما را بخریم؟',
    answer:
      'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. گاهی قیمت بلیط در روزهای نزدیک به پرواز ارزان‌تر می‌شود؛ اما برای سفر در تعطیلات و روزهای پرتردد بهتر است رزرو را زودتر انجام دهید.'
  },
  {
    question: 'در هر پرواز، میزان بار مجاز چقدر است؟',
    answer:
      'میزان بار مجاز به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید بلیط، میزان بار مجاز را در اطلاعات پرواز بررسی کنید. در صورت بیشتر بودن بار از حد مجاز، ممکن است هزینه اضافه‌بار دریافت شود.'
  },
  {
    question: 'نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟',
    answer:
      'قیمت بلیط کودکان و نوزادان به قوانین شرکت هواپیمایی، کلاس پرواز و نوع نرخ بلیط بستگی دارد. پیش از خرید، شرایط سنی و نرخ مربوط به هر مسافر را بررسی کنید.'
  },
  {
    question: 'رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟',
    answer:
      'هزینه نهایی به قیمت بلیط و شرایط فروش بستگی دارد. هنگام خرید آنلاین، مبلغ نهایی و هزینه‌های احتمالی را پیش از پرداخت بررسی کنید.'
  },
  {
    question: 'آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟',
    answer:
      'امکان استرداد به قوانین بلیط، شرکت هواپیمایی و زمان درخواست کنسلی بستگی دارد. پیش از خرید، قوانین استرداد و میزان جریمه احتمالی را مطالعه کنید.'
  },
  {
    question: 'آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟',
    answer:
      'قوانین تغییر مشخصات مسافر به نوع بلیط و مقررات شرکت هواپیمایی بستگی دارد. برای بررسی امکان اصلاح اطلاعات، شرایط بلیط خود را مطالعه کنید.'
  },
  {
    question: 'هنگام رزرو آنلاین بلیط هواپیما امکان انتخاب صندلی وجود دارد؟',
    answer:
      'امکان انتخاب صندلی به شرکت هواپیمایی و شرایط پرواز بستگی دارد. اطلاعات مربوط به انتخاب صندلی را هنگام خرید یا پیش از دریافت کارت پرواز بررسی کنید.'
  }
]
</script>

<style>
#faq{
  width: 1200px;
}
</style>
