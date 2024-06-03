<script setup>
import HeroAnimation from "../components/HeroAnimation.vue";
import MovingBackground from "../components/MovingBackground.vue";
</script>

<template>
  <section id="home" class="home">
    <HeroAnimation />
  </section>
</template>

<style lang="scss">
.home {
  height: 9vh;
  display: flex;
  align-items: flex-end;
}
</style>
