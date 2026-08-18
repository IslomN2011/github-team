import "./Types.css";
function Card({ title, text }) {
  return (
    <div className="cart">
      <h3>{title}</h3>

      <p>{text}</p>

      <button>
        Read More <span>→</span>
      </button>
    </div>
  );
}

function Types() {
  return (
    <section className="type">
      <div className="typeContainer">
        <div className="typeCards">
          <Card
            title="Project Plan"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />

          <Card
            title="Interior Work"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />

          <Card
            title="Retail Design"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />

          <Card
            title="2d/3d Art Work"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />

          <Card
            title="Interior Work"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />

          <Card
            title="Decoration Work"
            text="There are many variations of the passages of lorem Ipsum from available, majority."
          />
        </div>
      </div>
    </section>
  );
}

export default Types;