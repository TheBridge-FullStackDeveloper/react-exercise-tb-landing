import "../styles/bootcamps.css";
import { IconClock, IconMapPin } from "@tabler/icons-react";

const Card = ({ title, hours, format, description, img, info }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-content">
        <div>
          <h2>{title}</h2>

          <div className="hours-format">
            <div className="square">
              <p>
                {" "}
                <IconClock stroke={2} /> {hours}
              </p>
            </div>
            <div className="square">
              <p>
                {" "}
                <IconMapPin stroke={2} /> {format}
              </p>
            </div>
          </div>

          <div className="description">
            <p>{description}</p>
          </div>
        </div>

        <div className="info">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;