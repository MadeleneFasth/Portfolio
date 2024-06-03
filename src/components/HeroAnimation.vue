<template>
  <section class="type-animation">
    <h2>Hello, I'm <span class="hero-name">Madelene</span></h2>
    <h3 class="text-animation">and I'm a <span></span></h3>
    <p>Welcome to my page! Feel free to have a look around</p>
  </section>
</template>

<style lang="scss">
.type-animation {
  min-width: 280px;
  // background-color: red;
  position: absolute;
  margin-top: -17em;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--second-text-color);
    font-size: 9rem;
    letter-spacing: 0.6rem;
    font-weight: 600;
    font-family: "Questrial", sans-serif;
    margin-bottom: -2rem;
  }

  h3 {
    color: var(--second-text-color);
    font-size: 6rem;
    letter-spacing: 0.09rem;
    font-weight: 600;
    font-family: "Questrial", sans-serif;
    min-width: 280px;
    margin-bottom: -1rem;
  }

  p {
    color: var(--second-text-color);
    font-size: 2rem;
    letter-spacing: 0.09rem;
    font-family: "Questrial", sans-serif;
  }
}

.text-animation {
  font-size: 6rem;
  font-weight: 600;
  min-width: 280px;
}
.text-animation span {
  position: relative;
}
.text-animation span::before {
  content: "frontend developer";
  color: var(--header-text);
  animation: words 20s infinite;
}
.text-animation span::after {
  content: "";
  background-color: var(--bg-color);
  position: absolute;
  width: calc(100% + 8px);
  height: calc(100% + 10px);
  border-left: 3px solid var(--bg-color);
  right: -8px;
  animation: cursor 0.6s infinite, typing 20s steps(14) infinite;
}

@keyframes cursor {
  to {
    border-left: 2px solid var(--main-color);
  }
}
@keyframes words {
  0%,
  20% {
    content: "web developer";
  }
  21%,
  40% {
    content: "UI/UX designer";
  }
  41%,
  60% {
    content: "frontend developer";
  }
  61%,
  80% {
    content: "web designer";
  }
  /* 81%,
  100% {
    content: "";
  } */
}

@keyframes typing {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90% {
    width: 0;
  }
  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 8px);
  }
}
</style>
