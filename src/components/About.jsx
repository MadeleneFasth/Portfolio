/* eslint-disable react/no-unescaped-entities */

import "../style/About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-text">
        <p className="light h2  caps inter ">.</p>
        <p className="light h2  caps inter hovered">a</p>
        <p className="light h2  caps inter hovered">b</p>
        <p className="light h2  caps inter hovered">o</p>
        <p className="light h2  caps inter hovered">u</p>
        <p className="light h2  caps inter hovered">t</p>
      </div>
      <div className="about-background">
        <div className="inter about-name">
          <p>Madelene Fasth</p>
          <p className="location">Västerås, Sweden</p>
          <div className="work-container">
            <div className="dot-container">
              <p className="about-dot"></p>
              <p className="about-dot-two"></p>
            </div>
            <p className="work">Available for work</p>
          </div>
        </div>

        <div className="image-container">
          <img src="assets/profile3.jpg" alt="profile-picture" />
        </div>

        <div className="about-text-container">
          <p className="inter about-paragraph">
            I'm a passionate frontend developer and UX designer with a deep love
            for graphic design and a knack for problem-solving. My journey into
            web development was sparked by the thrill of finding elegant
            solutions to complex challenges and the joy of creating visually
            stunning designs.
          </p>
          <p className="inter about-paragraph">
            With a keen eye for aesthetics, I bring a unique blend of technical
            skill and artistic sensibility to the table. Although I'm still
            learning and constantly improving my skills, I thrive in
            collaborative environments where open communication and teamwork are
            paramount. Let's work together to create engaging and beautifully
            designed web experiences!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
