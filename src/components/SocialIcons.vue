<template>
  <div class="social-icons">
    <a href="https://www.linkedin.com/in/madelene-fasth-b3519818b/"
      ><i class="bx bxl-linkedin"></i
    ></a>
    <!-- <a href="#"><i class="bx bxl-github"></i></a> -->
  </div>
</template>

<style lang="scss">
.social-icons {
  position: absolute;
  z-index: 2;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid var(--second-text-color);
    color: var(--second-text-color);
    font-size: 1.3rem;
    border-radius: 50%;
    text-decoration: none;
  }
}
</style>
