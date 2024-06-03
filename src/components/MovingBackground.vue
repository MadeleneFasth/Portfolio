<template>
  <div class="hero-container">
    <dotlottie-player
      class="hero-img"
      src="https://lottie.host/fee6288d-898c-4ab6-8276-d64ee7e8aaf7/jHC3H4zZXp.json"
      background="transparent"
      speed="2"
      loop
      autoplay
    ></dotlottie-player>
  </div>
</template>

<style lang="scss">
.hero-img {
  margin-top: -16rem;
  margin-left: -10rem;
  width: 900px;
  height: 900px;

  @media screen and (min-width: 1600px) {
    width: 1100px;
    height: 1100px;
  }
}
</style>
