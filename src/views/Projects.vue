<script></script>

<template>
  <section class="projects" id="projects" name="projects">
    <h2>projects</h2>

    <ul class="parallax">
      <li class="projects-item">
        <img src="../assets/nature.jpg" alt="green landscape" />

        <div class="text-container">
          <h3>Upcomming project</h3>
          <p>Soon to be filled with actual content!</p>
        </div>
      </li>

      <li class="projects-item">
        <img src="../assets/nature.jpg" alt="green landscape" />
        <div class="text-container">
          <h3>Upcomming project</h3>
          <p>Soon to be filled with actual content!</p>
        </div>
      </li>

      <li class="projects-item">
        <img src="../assets/nature.jpg" alt="green landscape" />
        <div class="text-container">
          <h3>Upcomming project</h3>
          <p>Soon to be filled with actual content!</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  margin-top: 20rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15rem;

    li:nth-child(1) {
      animation: parallax linear;
      animation-timeline: scroll();
    }

    li:nth-child(2) {
      animation: parallaxTwo linear;
      animation-timeline: scroll();
    }

    li:nth-child(3) {
      animation: parallaxThree linear;
      animation-timeline: scroll();
    }
  }

  h2 {
    font-size: 9em;
    color: var(--second-text-color);
    letter-spacing: 0.6rem;
    margin-bottom: 2rem;
    z-index: 1;
  }

  .projects-item {
    display: flex;
    justify-content: space-between;

    img {
      width: 50%;
      box-shadow: 1px 1px 15px var(--header-text);
    }

    .text-container {
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      justify-content: end;
      width: 30%;

      h3 {
        letter-spacing: 0.6rem;
      }
      p {
        margin-bottom: 0;
      }
    }
  }

  @keyframes parallax {
    to {
      transform: translateY(-9rem);
    }
  }
}

@keyframes parallaxTwo {
  70% {
    transform: translateY(-20rem);
  }
}

@keyframes parallaxThree {
  70% {
    transform: translateY(-32rem);
  }
}
</style>
