<template>
  <nav class="navbar">
    <ul>
      <li><a href="#home">home</a></li>
      <li><a href="#knowledge">knowledge</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="#about">about</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navbar {
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 2;
  top: 0;
  box-shadow: 3px 3px 50px rgba(255, 255, 255, 0.164);

  ul {
    list-style: none;
    margin-left: -1rem;
    display: flex;
    flex-direction: column;
    animation: listScroller linear;
    animation-timeline: scroll();
  }

  a {
    text-decoration: none;
    color: var(--second-text-color);
  }

  a:hover {
    color: var(--header-text);
  }
}

@keyframes listScroller {
  10% {
    flex-direction: row;
    gap: 1rem;
  }

  100% {
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
