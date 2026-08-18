import "./Work.css";

import work1 from "../../../../assets/Photo (7).jpg";
import work2 from "../../../../assets/Photo (8).jpg";
import work3 from "../../../../assets/Photo (9).jpg";
import work4 from "../../../../assets/Photo (10).jpg";

function Card({ number, title, text, image, className }) {
  return (
    <div className={className}>
      <div className="workImage">
        <img src={image} alt={title} />
      </div>

      <div className="workText">
        <span className="workNumber">{number}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="work">
      <div className="workContainer">
        <div className="workTitle">
          <h2>How We Work</h2>
          <p>
            It is a long established fact will be distracted. Lorem Ipsum is
            simply dummy text of
            <br />
            the printing and typesetting industry.
          </p>
        </div>

        <div className="workCards">
          <Card
            className="workCard"
            number="01"
            title="Concept & Details"
            text="It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the typesetting industry."
            image={work1}
          />

          <Card
            className="workCard reverse"
            number="02"
            title="Idea for Work"
            text="It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the typesetting industry."
            image={work2}
          />

          <Card
            className="workCard"
            number="03"
            title="Design"
            text="It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the typesetting industry."
            image={work3}
          />

          <Card
            className="workCard reverse"
            number="04"
            title="Perfection"
            text="It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the typesetting industry."
            image={work4}
          />
        </div>
      </div>
    </section>
  );
}

export default Work;