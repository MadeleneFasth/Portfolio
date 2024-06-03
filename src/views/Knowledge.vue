<template>
  <section id="knowledge" class="knowledge">
    <h2 class="">
      <span class="early left down right-rotate">J</span>
      <span class="early right up left-rotate">a</span>
      <span class="early left down right-rotate">v</span>
      <span class="early left down right-rotate">a</span>
      <span class="early left down right-rotate">S</span>
      <span class="early right up left-rotate">c</span>
      <span class="early left down right-rotate">r</span>
      <span class="early right up left-rotate">i</span>
      <span class="early left down right-rotate">p</span>
      <span class="early right up left-rotate">t</span>
    </h2>

    <h2>
      <span class="early left down right-rotate">C</span>
      <span class="early right up left-rotate">S</span>
      <span class="early right up left-rotate">S</span>
    </h2>

    <h2>
      <span class="early right down right-rotate">R</span>
      <span class="early right up left-rotate">e</span>
      <span class="early right down left-rotate">a</span>
      <span class="early right down right-rotate">c</span>
      <span class="early right up right-rotate">t</span>
    </h2>

    <h2>
      <span class="middle left up left-rotate">U</span>
      <span class="middle left down right-rotate">X</span>
      <span class="middle left up left-rotate">/</span>
      <span class="middle left up right-rotate">U</span>
      <span class="middle left down left-rotate">I</span>
    </h2>

    <h2>
      <span class="middle right up left-rotate">V</span>
      <span class="middle right down left-rotate">u</span>
      <span class="middle right up right-rotate">e</span>
    </h2>

    <h2>
      <span class="middle right up left-rotate">B</span>
      <span class="middle right up right-rotate">a</span>
      <span class="middle right up left-rotate">c</span>
      <span class="middle right down right-rotate">k</span>
      <span class="middle right up right-rotate">e</span>
      <span class="middle right down left-rotate">n</span>
      <span class="middle right up right-rotate">d</span>
    </h2>

    <h2>
      <span class="late left down right-rotate">T</span>
      <span class="late left up left-rotate">y</span>
      <span class="late left up right-rotate">p</span>
      <span class="late left down left-rotate">e</span>
      <span class="late left down left-rotate">S</span>
      <span class="late left up right-rotate">c</span>
      <span class="late left down right-rotate">r</span>
      <span class="late left down left-rotate">i</span>
      <span class="late left up left-rotate">p</span>
      <span class="late left up left-rotate">t</span>
    </h2>

    <h2>
      <span class="late right down right-rotate">H</span>
      <span class="late right up left-rotate">T</span>
      <span class="late right down right-rotate">M</span>
      <span class="late right down left-rotate">L</span>
    </h2>
  </section>
</template>

<style lang="scss">
// :root {
//   --five: 5rem;
//   --three: 3rem;
// }

.knowledge {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8rem;

  h2 {
    font-size: 10em;
    margin-left: 0.5rem;
    letter-spacing: 0.6rem;
    color: var(--second-text-color);
    display: flex;
    animation-timeline: scroll();
  }

  h2:nth-child(even) {
    color: var(--header-text);
  }

  .early {
    animation: scrambleEarly auto linear;
    animation-timeline: scroll();
  }

  .middle {
    animation: scrambleMiddle auto linear;
    animation-timeline: scroll();
  }

  .late {
    animation: scrambleLate auto linear;
    animation-timeline: scroll();
  }

  .right {
    --translate-x: 5rem;
  }
  .left {
    --translate-x: -5rem;
  }
  .up {
    --translate-y: 6rem;
  }
  .down {
    --translate-y: -6rem;
  }
  .right-rotate {
    --rotate: 60deg;
  }
  .left-rotate {
    --rotate: -60deg;
  }
}

@keyframes scrambleEarly {
  15% {
    transform: translateY(0) translateX(0) rotate(0);
  }
  50% {
    transform: translateY(var(--translate-y)) translateX(var(--translate-x))
      rotate(var(--rotate));
  }
}

@keyframes scrambleMiddle {
  20% {
    transform: translateY(0) translateX(0) rotate(0);
  }
  50% {
    transform: translateY(var(--translate-y)) translateX(var(--translate-x))
      rotate(var(--rotate));
  }
}

@keyframes scrambleLate {
  25% {
    transform: translateY(0) translateX(0) rotate(0);
  }
  50% {
    transform: translateY(var(--translate-y)) translateX(var(--translate-x))
      rotate(var(--rotate));
  }
}
</style>
