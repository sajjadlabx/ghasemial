<template>
  <section class="promo-slider" dir="rtl">
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :space-between="16"
      :loop="true"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }"
      class="promo-swiper"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.id"
        class="promo-slide"
      >
        <NuxtLink :to="slide.link" class="promo-card">
          <NuxtImg
            :src="slide.image"
            :alt="slide.title"
            loading="lazy"
            class="promo-image"
          />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const slides = [
  {
    id: 1,
    title: 'رزرو خدمات و تشریفات فرودگاهی',
    image: '/img/slider/reserveservices.png',
    link: '/#'
  },
  {
    id: 2,
    title: 'سفری متفاوت با خدمات ویژه',
    image: '/img/slider/cardtravel.png',
    link: '/#'
  },
  {
    id: 3,
    title: 'تجربه سفری آسوده',
    image: '/img/slider/loantravel.png',
    link: '/#'
  }
]
</script>

<style scoped>
.promo-slider {
  width: 62%;
  height: 250px;
  margin: auto;
  margin-top: 30px;
  padding: 0 8px;
  box-sizing: border-box;
}

.promo-swiper {
  width: 100%;
  overflow: hidden;
}

.promo-slide {
  height: auto;
}

.promo-card {
  display: block;
  width: 100%;
  height: 224px;
  overflow: hidden;
  border: 1px solid #dedede;
  border-radius: 9px;
  box-sizing: border-box;
}

.promo-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.promo-card:hover .promo-image {
  transform: scale(1.03);
}

@media (max-width: 767px) {
  .promo-slider {
    width: 100%;
    padding: 0 12px;
  }

  .promo-card {
    height: 190px;
  }
}
</style>