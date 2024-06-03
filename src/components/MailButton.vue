<template>
  <div class="mail-btn">
    <a href="mailto:madelenefasth@gmail.com" class="btn">send e-mail</a>
  </div>
</template>

<style lang="scss">
.mail-btn {
  position: sticky;
  width: 50%;
  top: 0.5rem;
  margin-right: 1rem;
  display: flex;
  justify-content: end;
  z-index: 4;
  left: 100em;
  margin-top: -4rem;

  a {
    padding: 0.5rem 2rem;
    box-shadow: 0 0 25px var(--main-color);
    border-radius: 4rem;
    border: 2px solid transparent;
    letter-spacing: 0.09rem;
    background-color: var(--bg-color);
    color: var(--second-text-color);
    border: 2px solid var(--second-text-color);
    box-shadow: 0 0 25px transparent;
    text-decoration: none;
  }
}
</style>
