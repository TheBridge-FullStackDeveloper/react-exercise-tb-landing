import "./bootcamp.css";

function Bootcamp({ title, img, hours, format, description }) {
  return (
    <div className="singleBootcamp">
      <div className="titleWithName">
        <h2 style={{ margin: 10 }}>{title}</h2>
        <img className="imageLogo" src={img} height={125} width={125} />
      </div>

      <div className="hoursWithFormat">
        <p id="hours">{hours}</p>
        <p id="format">{format}</p>
      </div>

      <p id="description">{description}</p>
      <div id="info">+ INFO</div>
    </div>
  );
}

export default Bootcamp;
