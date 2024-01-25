import "./bootcamp.css";

function Bootcamp(props) {
  return (
    <div className="singleBootcamp">
      <div className="titleWithName">
        <h3>{props.title}</h3>
        <p id="name" style={{ backgroundColor: props.color }}>
          {props.name}
        </p>
      </div>

      <div className="hoursWithFormat">
        <p id="hours">{props.hours}</p>
        <p id="format">{props.format}</p>
      </div>

      <p id="description">{props.description}</p>
      <p id="info">+ INFO</p>
    </div>
  );
}

export default Bootcamp;
