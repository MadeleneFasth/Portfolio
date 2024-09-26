import "../style/Quote.css";

function Quote() {
  return (
    <div className="paragraph-container">
      <div className="breaker light h1 inter">+</div>
      <div className="scroll-reveal">
        <p className="light h3 inter paragraph">
          <box-icon
            type="solid"
            name="quote-alt-right"
            color="grey"
            size="lg"
          ></box-icon>
          In the intersection of code and creativity lies a canvas of endless
          possibilities. Each line of code is a stroke in a digital painting,
          and every user interaction is a brushstroke that brings it to life. My
          journey as a front-end developer and UX designer is driven by the
          belief that technology should not only function seamlessly but also
          resonate with the human experience. I strive to create digital spaces
          that are not only intuitive but also inspiring, where every design
          decision reflects a commitment to both form and function. Here, every
          project is a testament to the harmony of logic and artistry
          <box-icon
            type="solid"
            name="quote-alt-left"
            color="grey"
            size="lg"
          ></box-icon>
        </p>
      </div>
      <div className="breaker-bottom light h1 inter">+</div>
    </div>
  );
}
export default Quote;
