import '../styles/bootcampCard.css';

const BootcampCard = ({ title, description, icon, mode }) => {
  return (
    <div className="bootcamp-card">
      <div className="bootcamp-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="mode">{mode}</span>
    </div>
  );
};

export default BootcampCard;
