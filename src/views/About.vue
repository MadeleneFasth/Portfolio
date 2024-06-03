<template>
  <section class="about" id="about" name="about">
    <h2>about</h2>

    <div class="about-content">
      <div class="img-container">
        <img src="../assets/blwh.png" alt="profilbild" />
      </div>

      <div class="text-content">
        <p>
          I'm a passionate frontend developer with a deep love for graphic
          design and a knack for problem-solving. My journey into web
          development was sparked by the thrill of finding elegant solutions to
          complex challenges and the joy of creating visually stunning designs.
        </p>
        <p>
          With a keen eye for aesthetics, I bring a unique blend of technical
          skill and artistic sensibility to the table. Although I'm still
          learning and constantly improving my skills, I thrive in collaborative
          environments where open communication and teamwork are paramount.
        </p>
        <p>
          Let's work together to create engaging and beautifully designed web
          experiences!
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  margin-top: 7em;

  h2 {
    font-size: 9em;
    color: var(--second-text-color);
    letter-spacing: 0.6rem;
    z-index: 1;
    position: absolute;
    margin-top: -3rem;
    animation: parallaxPortrait linear;
    animation-timeline: scroll();
    // background-color: purple;
  }

  .about-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    min-height: 100vh;
    position: absolute;
    width: 100%;

    .img-container {
      max-height: 30em;
      max-width: 30em;
      min-width: 30em;
      min-width: 30em;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      z-index: 0;
    }

    p {
      width: 30em;
    }
  }
}

@keyframes parallaxPortrait {
  90% {
    transform: translateY(0rem);
  }

  100% {
    transform: translateY(3rem);
  }
}
</style>
