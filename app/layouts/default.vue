<template>
  <app-header />
  <main>
    <slot />
  </main>
  <app-footer />
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';


</script>

<style>

</style>