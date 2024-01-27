import "./bootcamp.css";

function Bootcamp(props) {
  return (
    <div className="singleBootcamp">
      <div className="titleWithName">
        <h2 style={{ margin: 10 }}>{props.title}</h2>
        <img
          className="imageLogo"
          src={props.img}
          alt={props.img}
          height={125}
          width={125}
        />
      </div>

      <div className="hoursWithFormat">
        <p id="hours">{props.hours}</p>
        <p id="format">{props.format}</p>
      </div>

      <p id="description">{props.description}</p>
      <div id="info">+ INFO</div>
    </div>
  );
}

export default Bootcamp;
